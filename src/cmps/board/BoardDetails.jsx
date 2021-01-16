import { Component } from 'react'
import { connect } from 'react-redux'
import { GroupList } from '../groups/GroupList'
import { loadBoard, loadBoards } from '../../store/actions/boardAction'
import { boardService } from '../../services/boardService'
import { taskService } from '../../services/taskService'
import { groupService } from '../../services/groupService'
import Button from '@material-ui/core/Button'


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

    onUpdateTask = async (task, groupId) => {
        // console.log('task to update', task);
        const { activeBoard } = this.props
        const updatedBoard = taskService.update(task, activeBoard, groupId)
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

    onUpdateBoardName = async (boardName) => {
        const { activeBoard } = this.props
        const updatedBoard = { ...activeBoard }
        updatedBoard.name = boardName
        await boardService.update(updatedBoard)
        this.props.loadBoards()
        this.loadActiveBoard()
    }

    onUpdateBoardDesc = async (description) => {
        const { activeBoard } = this.props
        const updatedBoard = { ...activeBoard }
        updatedBoard.desc = description
        await boardService.update(updatedBoard)
        this.props.loadBoards()
        this.loadActiveBoard()
    }

    onUpdateGroup = async (group) => {
        const { activeBoard } = this.props
        const updatedBoard = groupService.update(group, activeBoard)
        await boardService.update(updatedBoard)
        this.loadActiveBoard()
    }


    onDragEnd = async (res) => {
        const { activeBoard } = this.props
        const items = Array.from(activeBoard.groups)
        const [reorderedItem] = items.splice(res.source.index, 1)
        items.splice(res.destination.index, 0, reorderedItem)
        const newGroups = items;
        const updatedBoard = { ...activeBoard }
        updatedBoard.groups = newGroups
        await boardService.update(updatedBoard)
        this.loadActiveBoard()
    }

    render() {
        const { activeBoard } = this.props
        if (!activeBoard) return <div>Loading no active user...</div>
        return (
            <section className="board-details">
                <div className="board-header-container">
                    <div className="board-name-container">
                        <span
                            className="board-name editable"
                            contentEditable="true"
                            onBlur={(ev) => {
                                this.onUpdateBoardName(ev.target.innerText)
                            }}
                            suppressContentEditableWarning={true}
                        >
                            {activeBoard.name}
                        </span>
                    </div>

                    <div className="board-desc-container">
                        <span
                            className="board-desc editable"
                            contentEditable="true"
                            onBlur={(ev) => {
                                this.onUpdateBoardDesc(ev.target.innerText)
                            }}
                            suppressContentEditableWarning={true}
                        >
                            {activeBoard.desc}
                        </span>
                    </div>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                            this.onAddGroup('new group')
                        }}>New Group</Button>
                </div>

                <GroupList
                    groups={activeBoard.groups}
                    onRemoveTask={this.onRemoveTask}
                    onAddTask={this.onAddTask}
                    onUpdateTask={this.onUpdateTask}
                    onUpdateGroup={this.onUpdateGroup}
                    onRemoveGroup={this.onRemoveGroup}
                    handleDragEnd={this.onDragEnd}
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
    loadBoards
}

export const BoardDetails = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_BoardDetails);