import { Delete } from '@material-ui/icons';
import { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';


import chat from '../../assets/icons/chat.svg';
import { TaskPropertyModal } from './columns/TaskPropertyModal';
import { DateRange } from './columns/DateRange';
import { Notes } from './columns/Notes';
import { TaskMembers } from './columns/TaskMembers';
import { TaskDetails } from './TaskDetails';
import { taskService } from '../../services/taskService';
import { DeleteModalTask } from '../DeleteModalTask';
import { userService } from '../../services/userService';
import { socketService } from '../../services/socketService';

export class TaskPreview extends Component {
    state = {
        editMode: false,
        task: {},
        isShownDetails: false,
        isShownMembers: false,
        isModalShown: false,
        isStatusClicked: false,
        isPriorityClicked: false,
        isModalDeleteShown: false
    }

    componentDidMount() {
        const currTask = this.props.task;
        this.setState({ task: currTask });
    }

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    toggleShowDetails = () => {
        this.setState({
            isShownDetails: !this.state.isShownDetails,
        })
    }

    toggleShowModal = (option) => {

        (option === 'status') ?
            this.setState({
                isStatusClicked: !this.state.isStatusClicked,
                isModalShown: !this.state.isModalShown
            }) :
            this.setState({
                isPriorityClicked: !this.state.isPriorityClicked,
                isModalShown: !this.state.isModalShown
            })
    }

    handleChange = (ev) => {
        const { value } = ev.target
        const field = ev.target.name
        const copy = { ...this.state.task }
        copy[field] = value
        this.setState({ task: copy })

    }

    onChangeDate = (date) => {
        const { task } = this.state;
        const { group } = this.props;
        task.dateRange = date;
        this.props.onUpdateTask(task, group.id);
    }

    handleNoteChange = (note) => {
        const { task } = this.state;
        const { group } = this.props;
        task.note = note;
        this.props.onUpdateTask(task, group.id);
    }

    handleModalChange = (txt, type) => {
        const copy = { ...this.state.task }
        copy[type] = txt
        this.setState({ task: copy }, () => { this.props.onUpdateTask(this.state.task, this.props.group.id) })

    }

    closeModal = () => {
        this.setState({
            isStatusClicked: false,
            isPriorityClicked: false,
            isModalShown: false,
            isShownDetails: false
        })
    }

    onToggleDelete = () => {
        var { isModalDeleteShown } = this.state
        this.setState({ isModalDeleteShown: !isModalDeleteShown })
    }

    closeDetails = () => {
        this.setState({ isShownDetails: false })
    }

    onAddLabel = (ev, label, type) => {
        ev.preventDefault()
        this.props.activeBoard[type].push(label)
        const { task } = this.state;
        const { group } = this.props;
        this.props.onUpdateTask(task, group.id);
    }
    onRemoveLabel = (ev, txt, type) => {
        ev.stopPropagation()
        if (this.findLabel(txt, type)) {
            return
        }
        this.props.activeBoard[type] = this.props.activeBoard[type].filter(option => option.txt !== txt)
        const { task } = this.state;
        const { group } = this.props;
        this.props.onUpdateTask(task, group.id);
    }

    findLabel = (txt, type) => {
        let found = false
        this.props.activeBoard.groups.forEach(group => {
            group.tasks.forEach(task => {
                if (task[type] === txt) {
                    found = true
                }
            })
        })
        return found
    }

    onAddComment = (comment = {}) => {
        const { group } = this.props;
        const task = taskService.addComment(comment, this.props.task)
        this.props.onUpdateTask(task, group.id)
    }

    getPropColor = (txt, type) => {
        return this.props.activeBoard[type].find(option => option.txt === txt).color;
    }

    onRemoveMember = (memberId) => {
        const { group, task, onUpdateTask } = this.props;
        const updatedTask = taskService.removeMember(task, memberId)
        onUpdateTask(updatedTask, group.id)
    }

    onAddMember = async (member) => {
        const { group, task, onUpdateTask, loggedInUser, onUpdateUser } = this.props;
        const updatedTask = taskService.addMember(task, member)
        onUpdateTask(updatedTask, group.id)
        const notification = {
            byUser: {
                _id: loggedInUser._id,
                fullname: loggedInUser.fullname,
                imgUrl: loggedInUser.imgUrl
            },
            content: `added ${member.fullname} to task ${task.name}`
        }
        socketService.emit('task add member', notification)
        // const user = await userService.addNotification(member, notification)
        // await userService.addNotification(member, notification)
        // await onUpdateUser(user)
        // const user = {log}
    }

    render() {
        const { onRemoveTask, task, group, onUpdateTask, provided, activeBoard } = this.props
        const { editMode, isStatusClicked, isPriorityClicked, isShownDetails, isModalShown } = this.state
        const { name } = this.state.task
        if (!activeBoard) return <div>Loading...</div>
        return (
            <div
                style={{ borderLeft: `8px solid ${group.color} ` }}
                className="task-preview flex space-between">
                <div className="task-left flex space-between align-center" {...provided.dragHandleProps}>
                    <div className="task-left-content flex align-center">
                        <Delete
                            className="trash"
                            onClick={this.onToggleDelete}
                        />
                        {this.state.isModalDeleteShown &&
                            <DeleteModalTask
                                onRemove={onRemoveTask}
                                task={task}
                                group={group}
                                onCloseModalDelete={this.onToggleDelete}
                            />}
                        {this.state.isModalDeleteShown &&
                            <div
                                className="dark-screen-nover "
                            />}
                        {editMode &&
                            <form onSubmit={(ev) => {
                                ev.preventDefault()
                                this.toggleEditMode()
                                onUpdateTask(this.state.task, group.id)
                            }}>
                                <input
                                    name="name"
                                    value={name}
                                    onBlur={() => {
                                        this.toggleEditMode()
                                        onUpdateTask(this.state.task, group.id)
                                    }}
                                    autoComplete="off"
                                    autoFocus={true}
                                    onChange={(ev) => {
                                        this.handleChange(ev)
                                    }}
                                />
                                <button type="submit" hidden></button>
                            </form>
                        }

                        {!editMode &&
                            <p className="task-name">{task.name}</p>}
                        {!editMode &&
                            <EditIcon
                                className="edit-icon"
                                onClick={this.toggleEditMode}
                            >edit
                        </EditIcon>}
                    </div>
                    <div
                        className="task-left-chat flex end align-center"
                        onClick={this.toggleShowDetails} >
                        <img
                            src={chat}
                            width="25px"
                            alt="chaticon"
                            className="icon-chat"
                        />
                    </div>
                </div>
                <div className="task-right flex align-center space-between">
                    <TaskMembers
                        task={task}
                        boardMembers={activeBoard.members}
                        onRemoveMember={this.onRemoveMember}
                        onAddMember={this.onAddMember}
                    />
                    <div
                        className={`status relative flex center align-center `}
                        style={{ backgroundColor: this.getPropColor(task.status, 'status') }}
                        onClick={() => {
                            this.toggleShowModal('status')
                        }}>
                        <span className="text-no-overflow">{task.status}</span>
                        {isStatusClicked && <TaskPropertyModal
                            type="status"
                            handleModalChange={this.handleModalChange}
                            options={activeBoard.status}
                            onAddLabel={this.onAddLabel}
                            onRemoveLabel={this.onRemoveLabel}
                            findLabel={this.findLabel}
                        />}
                    </div>
                    <DateRange className="column-date" task={task} group={group} onUpdateTask={onUpdateTask} />
                    <div
                        className={`priority relative flex align-center center`}
                        style={{ backgroundColor: this.getPropColor(task.priority, 'priority') }}
                        onClick={() => {
                            this.toggleShowModal('priority')
                        }}>
                        <span className="text-no-overflow">{task.priority}</span>
                        {isPriorityClicked &&
                            <TaskPropertyModal
                                type="priority"
                                handleModalChange={this.handleModalChange}
                                options={activeBoard.priority}
                                onAddLabel={this.onAddLabel}
                                onRemoveLabel={this.onRemoveLabel}
                                findLabel={this.findLabel}
                            />}
                    </div>
                    <Notes task={task} handleNoteChange={this.handleNoteChange} />
                </div>

                {isModalShown && <div className="screen" onClick={this.closeModal}></div>}
                {isShownDetails && <div className="dark-screen" onClick={this.closeModal}></div>}
                {isShownDetails &&
                    <TaskDetails
                        task={task}
                        onAddComment={this.onAddComment}
                        closeModal={this.closeModal} />}
            </div >
        )
    }
}
