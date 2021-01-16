import { Delete } from '@material-ui/icons';
import { Chat } from '@material-ui/icons';
import { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';

import { TaskPropertyModal } from './columns/TaskPropertyModal';
import { taskService } from '../../services/taskService';
import { DueDate } from './columns/DueDate';
import { Notes } from './columns/Notes';
import { Members } from './columns/Members';

export class TaskPreview extends Component {
    state = {
        editMode: false,
        task: {
            name: '', //no need for those keys. NEED TO DELETE
            status: '',
            priority: ''
        },
        modalPosition: {},
        isModalShown: false,
        isStatusClicked: false,
        isPriorityClicked: false
    }

    componentDidMount() {
        const currTask = this.props.task
        this.setState({ task: currTask })
    }

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    toggleShowModal = (option) => {
        (option === 'status') ?
            this.setState({ isStatusClicked: !this.state.isStatusClicked }) :
            this.setState({ isPriorityClicked: !this.state.isPriorityClicked })

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

    handleModalChange = (txt, type) => {
        console.log('tair is:', txt, type);
        const copy = { ...this.state.task }
        copy[type] = txt
        this.setState({ task: copy }, () => { this.props.onUpdateTask(this.state.task, this.props.group.id) })

    }

    openModal = (ev) => {
        console.log('ev.target is:', ev.target);
        const clientX = ev.clientX
        const clientY = ev.clientY
        this.setState({ isStatusShown: true })
        // this.setState({modalPosition:{clientX,clientY}})
    }

    closeModal = () => {
        this.setState({ isStatusClicked: false, isPriorityClicked: false })
    }

    getTypes = (type) => {
        return taskService.getTypesToRender(type)
    }

    render() {
        const { onRemoveTask, task, group, onUpdateTask } = this.props
        const { editMode, isStatusClicked, isPriorityClicked } = this.state
        const { name } = this.state.task
        return (
            <div style={{ borderLeft: `10px solid ${group.color} ` }} className="task-preview flex space-between">
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
                    <div >
                        <Chat className="chat" />
                    </div>
                    <Members task={task} />
                    <div
                        className={`status ${task.status} relative  flex center align-center`}
                        onClick={() => { this.toggleShowModal('status') }}>
                        {task.status}
                        {isStatusClicked && <TaskPropertyModal
                            type="status"
                            handleModalChange={this.handleModalChange}
                            options={this.getTypes('status')} />}
                    </div>
                    <DueDate className="column-date" task={task} onChangeDate={this.onChangeDate} group={group} />
                    <div
                        className={`priority ${task.priority} relative  flex align-center center`}
                        onClick={(ev) => { this.toggleShowModal('priority') }}>
                        {task.priority}
                        {isPriorityClicked &&
                            <TaskPropertyModal
                                type="priority"
                                handleModalChange={this.handleModalChange}
                                options={this.getTypes('priority')} />}
                    </div>
                    <Notes className="column-notes" task={task} />
                </div>
            </div >
        )
    }
}
