import { Delete } from '@material-ui/icons';
import { Chat } from '@material-ui/icons';

export function TaskPreview({ task, group, onRemoveTask }) {

    return (
        <div className="task-preview flex space-between">
            <div className="task-left flex">
                <Delete
                    className="trash"
                    onClick={() => {
                        onRemoveTask(task.id, group)
                    }}
                />
                <p>{task.name}</p>
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
