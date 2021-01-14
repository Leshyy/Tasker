import { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ChatIcon from '@material-ui/icons/Chat';
import Avatar from '@material-ui/core/Avatar';
import { AvatarGroup } from '@material-ui/lab';
import Amit from '../../assets/styles/img/Amit.jpeg';
import Tamir from '../../assets/styles/img/Tamir.jpeg';
import Tair from '../../assets/styles/img/Tair.jpeg';
export class TaskPreview extends Component {

    render() {
        const { task, group, onRemoveTask } = this.props
        const date = new Date().toLocaleDateString()
        return (
            <div className="task-preview flex space-between">
                <div className="task-left flex">
                    {/* <button onClick={() => onRemoveTask(task.id, group)}><DeleteIcon /></button> */}
                    <DeleteIcon className="trash" onClick={() => onRemoveTask(task.id, group)} />
                    <p>{task.name}</p>
                </div>
                <div className="task-right flex">
                    <div><ChatIcon className="chat" /></div>
                    <div>
                        <AvatarGroup max={3}>
                            <Avatar className="avatar" alt="Amit" src={Amit} />
                            <Avatar className="avatar" alt="Amit" src={Tamir} />
                            <Avatar className="avatar" alt="Amit" src={Tair} />
                        </AvatarGroup>
                    </div>
                    <div className="status">{task.status}</div>
                    <div>
                        <input
                            type="date"
                            className="input-date"
                        /></div>
                    <div className="priority">{task.priority}</div>

                </div>

            </div>
        )
    }
}
