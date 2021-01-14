import { Component } from 'react'

export class TaskPreview extends Component {

    render() {
        const { task, group, onRemoveTask } = this.props
        return (
            <div className="task-preview flex space-between">
                <div className="task-left flex">
                    <button onClick={() => onRemoveTask(task.id, group)}>X</button>
                    <p>{task.name}</p>
                </div>
                <div className="task-right flex">
                    <div>chat</div>
                    <div>picture</div>
                    <div className="status">{task.status}</div>
                    <div>date</div>
                    <div className="priority">{task.priority}</div>

                </div>

            </div>
        )
    }
}
