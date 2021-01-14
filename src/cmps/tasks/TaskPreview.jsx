import { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ChatIcon from '@material-ui/icons/Chat';

export class TaskPreview extends Component {

    render() {
        const { task, group, onRemoveTask } = this.props
        return (
            <div className="task-preview flex space-between">
                <div className="task-left flex">
                    {/* <button onClick={() => onRemoveTask(task.id, group)}><DeleteIcon /></button> */}
                    <DeleteIcon className="trash" item xs={4} onClick={() => onRemoveTask(task.id, group)} />
                    <p>{task.name}</p>
                </div>
                <div className="task-right flex">
                    <div><ChatIcon className="chat" /></div>
                    <div>Pictures</div>
                    <div className="status">{task.status}</div>
                    <div><input type="date" value="15-1-2021" className="input-date" /></div>
                    <div className="priority">{task.priority}</div>

                </div>

            </div>
        )
    }
}
