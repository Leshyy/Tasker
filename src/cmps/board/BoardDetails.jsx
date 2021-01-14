import { Component } from 'react'
import { connect } from 'react-redux'
import { GroupList } from '../groups/GroupList'
import { loadBoard } from '../../store/actions/boardAction'
import { boardService } from '../../services/boardService'
import { taskService } from '../../services/taskService'
import { groupService } from '../../services/groupService'

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
        await this.props.loadBoard(boardId)
    }

    onRemoveTask = async (taskId, group) => {
        const { activeBoard } = this.props
        const updatedBoard = taskService.remove(taskId, activeBoard, group)
        console.log('updated', updatedBoard);
        await boardService.update(updatedBoard)
        this.loadActiveBoard()

    }

    onAddTask = async (txt, groupId) => {
        const { activeBoard } = this.props
        const updatedBoard = taskService.add(txt, activeBoard, groupId)
        console.log('updated', updatedBoard);
        await boardService.update(updatedBoard)
        this.loadActiveBoard()
    }

    onAddGroup = async (groupName) => {
        const { activeBoard } = this.props
        const updatedBoard = groupService.add(groupName, activeBoard)
        await boardService.update(updatedBoard)
        this.loadActiveBoard()
    }

    onRemoveGroup = async (groupId) => {
        const { activeBoard } = this.props
        const updatedBoard = groupService.remove(groupId, activeBoard)
        await boardService.update(updatedBoard)
        this.loadActiveBoard()
    }

    render() {
        const { activeBoard } = this.props
        if (!activeBoard) return <div>Loading no active user...</div>
        return (
            <section>
                <h1>{activeBoard.name}</h1>
                <h1>{activeBoard.desc}</h1>
                <button onClick={() => {
                    this.onAddGroup('new group')
                }}>Add Group</button>

                <GroupList
                    groups={activeBoard.groups}
                    onRemoveTask={this.onRemoveTask}
                    onAddTask={this.onAddTask}
                    onRemoveGroup={this.onRemoveGroup}
                />

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