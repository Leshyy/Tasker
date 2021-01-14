import { Delete } from '@material-ui/icons';
import { Chat } from '@material-ui/icons';
import { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';

export class TaskPreview extends Component {
    state = {
        editMode: false,
        task: {
            name: ''
        }

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

    render() {
        const { onRemoveTask, task, group, onUpdateTask } = this.props
        const { editMode } = this.state
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
                    <div>Pictures</div>
                    <div className="status">{task.status}</div>
                    <div>
                        <input type="date" className="input-date" />
                    </div>
                    <div className="priority">{task.priority}</div>

                </div>

            </div>
        )
    }
}
