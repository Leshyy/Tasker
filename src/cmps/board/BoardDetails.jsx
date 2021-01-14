import { Component } from 'react'
import { connect } from 'react-redux'
import { GroupList } from '../groups/GroupList'
import { loadBoard } from '../../store/actions/boardAction'
import { boardService } from '../../services/boardService'
import { taskService } from '../../services/taskService'

export class _BoardDetails extends Component {

    componentDidMount() {
        // get board id from url and set it to state
        this.loadActiveBoard()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.boardId !== this.props.match.params.boardId) {
            this.loadActiveBoard()
        }
    }

    loadActiveBoard = async () => {
        const boardId = this.props.match.params.boardId
        const res = await this.props.loadBoard(boardId)
        // console.log('active board', res);
    }

    onRemoveTask = async (taskId, group) => {
        const { activeBoard } = this.props
        const tasksToSave = taskService.remove(taskId, group)
        const groupIdx = activeBoard.groups.findIndex(currGroup => currGroup.id === group.id)
        activeBoard.groups[groupIdx].tasks = [...tasksToSave]
        console.log('activeBoard after enter is:', activeBoard);
        await boardService.update(activeBoard)
        this.loadActiveBoard()

    }

    onAddTask = async (txt, groupId) => {
        const { activeBoard } = this.props
        const savedTask = taskService.add(txt)
        const groupIdx = activeBoard.groups.findIndex(group => group.id === groupId)
        activeBoard.groups[groupIdx].tasks.push(savedTask)
        await boardService.update(activeBoard)
        this.loadActiveBoard()
    }

    onGroupDrag = async (newGroups) => {
        const { activeBoard } = this.props
        activeBoard.groups = [...newGroups]
        // console.log('board yafe', activeBoard)
        await boardService.update(activeBoard)
        this.loadActiveBoard()
    }

    render() {
        const { activeBoard } = this.props
        if (!activeBoard) return <div>Loading no active user...</div>
        return (
            <section>
                <h1>{activeBoard.name}</h1>
                <h1>{activeBoard.desc}</h1>
                <GroupList groups={activeBoard.groups} onRemoveTask={this.onRemoveTask} onAddTask={this.onAddTask} onGroupDrag={this.onGroupDrag} />
            </section>
        )
    }
}

const mapGlobalStateToProps = (state) => {
    return {
        activeBoard: state.boardReducer.activeBoard
    };
};
const mapDispatchToProps = {
    loadBoard,
}

export const BoardDetails = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_BoardDetails);