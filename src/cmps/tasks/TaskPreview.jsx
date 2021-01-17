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
        // document.addEventListener('click', this.toggleShowModal(''), false)
    }

    componentWillUnmount() {
        // document.removeEventListener('click', this.toggleShowModal(''), false)
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

    getTypes = (type) => {
        return taskService.getTypesToRender(type)
    }

    render() {
        const { onRemoveTask, task, group, onUpdateTask } = this.props
        const { editMode, isStatusClicked, isPriorityClicked, isShownChat, isModalShown } = this.state
        const { name } = this.state.task
        return (
            <div
                style={{ borderLeft: `8px solid ${group.color} ` }}
                className="task-preview flex space-between">
                <div className="task-left flex align-center">
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
                        <p>{task.name}</p>}
                    {!editMode &&
                        <EditIcon
                            className="edit-icon"
                            onClick={this.toggleEditMode}
                        >edit
                        </EditIcon>}
                </div>
                <div className="task-right flex align-center">
                    <div onClick={this.toggleShowChat} className="column-chat flex end align-center">
                        <img src={chat} width="25px" alt="chaticon" className="chat" />
                    </div>
                    <Members task={task} />
                    <div
                        className={`status ${task.status} relative  flex center align-center`}
                        onClick={() => {
                            this.toggleShowModal('status')
                        }}>
                        {task.status}
                        {isStatusClicked && <TaskPropertyModal
                            type="status"
                            handleModalChange={this.handleModalChange}
                            options={this.getTypes('status')}
                            isModalShown={this.state.isModalShown}
                        />}
                    </div>
                    <DueDate className="column-date" task={task} onChangeDate={this.onChangeDate} group={group} />
                    <div
                        className={`priority ${task.priority} relative  flex align-center center`}
                        onClick={() => {
                            this.toggleShowModal('priority')
                        }}>
                        {task.priority}
                        {isPriorityClicked &&
                            <TaskPropertyModal
                                type="priority"
                                handleModalChange={this.handleModalChange}
                                options={this.getTypes('priority')} />}
                    </div>
                    <Notes task={task} handleNoteChange={this.handleNoteChange} />
                    {isShownChat && <TaskChat task={task} />}
                </div>
                {isModalShown && <div className="screen" onClick={this.closeModal}></div>}
            </div >
        )
    }
}
