import { Component } from 'react'

export class TaskPreview extends Component {

    render() {
        const { task, group, onRemoveTask } = this.props
        return (
            <div className="task-preview flex space-between">
                <div className="task-left flex">
                    <button onClick={() => onRemoveTask(task.id, group)}>X</button>
                    <h3>{task.name}</h3>
                </div>
                <div className="task-right flex">
                    <p>chat</p>
                    <p>picture</p>
                    <p>{task.status}</p>
                    <p>date</p>
                    <p>{task.priority}</p>

                </div>

            </div>
        )
    }
}
