import { Delete } from '@material-ui/icons';
import { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';


import chat from '../../assets/icons/chat.svg';
import { TaskPropertyModal } from './columns/TaskPropertyModal';
import { taskService } from '../../services/taskService';
import { DueDate } from './columns/DueDate';
import { Notes } from './columns/Notes';
import { Members } from './columns/Members';
import { TaskChat } from './TaskChat';

export class TaskPreview extends Component {
    state = {
        editMode: false,
        task: {},
        isModalShown: false,
        isStatusClicked: false,
        isPriorityClicked: false,
        isShownChat: false
    }

    componentDidMount() {
        const currTask = this.props.task;
        this.setState({ task: currTask });
    }

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    toggleShowChat = () => {
        this.setState({ isShownChat: !this.state.isShownChat })
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
        task.dueDate = date;
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

    openModal = (ev) => {
        console.log('ev.target is:', ev.target);
        this.setState({ isStatusShown: true })
    }

    closeModal = () => {
        this.setState({ isStatusClicked: false, isPriorityClicked: false, isModalShown: false })
    }

    onAddLabel = (ev, label, type) => {
        ev.preventDefault()
        this.props.activeBoard[type].push(label)
        console.log('new one ', this.props.activeBoard);
        const { task } = this.state;
        const { group } = this.props;
        this.props.onUpdateTask(task, group.id);
    }
    onRemoveLabel = (ev, txt, type) => {
        ev.stopPropagation()
        if (this.findLabel(txt, type)) {
            console.log('cant del this!');
            return
        }
        // popup cant delete this
        this.props.activeBoard[type] = this.props.activeBoard[type].filter(option => option.txt !== txt)
        console.log('removeeeeeee', this.props.activeBoard[type]);
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

    getPropColor = (txt, type) => {
        return this.props.activeBoard[type].find(option => option.txt === txt).color;
    }

    render() {
        const { onRemoveTask, task, group, onUpdateTask, provided, activeBoard } = this.props
        const { editMode, isStatusClicked, isPriorityClicked, isShownChat, isModalShown } = this.state
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
                            onClick={() => {
                                onRemoveTask(task.id, group)
                            }}
                        />
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
                    <div className="task-left-chat flex end align-center" onClick={this.toggleShowChat} >
                        <img src={chat} width="25px" alt="chaticon" className="icon-chat" />
                    </div>
                </div>
                <div className="task-right flex align-center space-between">
                    <Members task={task} />
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
                    <DueDate className="column-date" task={task} onChangeDate={this.onChangeDate} group={group} />
                    <div
                        className={`priority relative  flex align-center center`}
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
                    {isShownChat && <TaskChat task={task} />}
                </div>
                {isModalShown && <div className="screen" onClick={this.closeModal}></div>}
            </div >
        )
    }
}
