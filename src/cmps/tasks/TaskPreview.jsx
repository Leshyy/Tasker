import { Delete } from '@material-ui/icons';
import { Chat } from '@material-ui/icons';
import { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';

import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import Amit from '../../assets/styles/img/Amit.jpeg';
import Tamir from '../../assets/styles/img/Tamir.jpeg';
import Tair from '../../assets/styles/img/Tair.jpeg';
import { Status } from './Status';
import { Priority } from './Priority';

export class TaskPreview extends Component {
    state = {
        editMode: false,
        task: {
            name: '',
            status: '',
            priority: ''
        },
        modalPosition: {},
        isStatusShown: false,
        isPriorityShown: false

    }

    componentDidMount() {
        const taskToSave = this.props.task
        this.setState({ task: taskToSave })
    }

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    handleChange = (ev) => {
        const { value } = ev.target
        const field = ev.target.name
        const copy = { ...this.state.task }
        copy[field] = value
        this.setState({ task: copy })

    }
    handleChangeModal = (txt, type) => {
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
        this.setState({ isStatusShown: false })
    }

    render() {
        const { onRemoveTask, task, group, onUpdateTask } = this.props
        const { editMode, isStatusShown, isPriorityShown } = this.state
        const { name } = this.state.task
        return (
            <div className="task-preview flex space-between">
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
                <div className="task-right flex">
                    <div><Chat className="chat" /></div>
                    <AvatarGroup max={3} >
                        <Avatar className="avatar" alt="Amit" src={Amit} />
                        <Avatar className="avatar" alt="Amit" src={Tamir} />
                        <Avatar className="avatar" alt="Amit" src={Tair} />
                    </AvatarGroup>
                    {/* <div className="status" onClick="">{task.status}</div> */}
                    <Status
                        status={task.status}
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                        isStatusShown={isStatusShown}
                        handleChangeModal={this.handleChangeModal} />
                    <div>
                        <input type="date" className="input-date" />
                    </div>
                    <div className="priority">{task.priority}</div>

                </div>

            </div>
        )
    }
}
