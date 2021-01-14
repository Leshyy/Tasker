import { Delete } from '@material-ui/icons';
import { Chat } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import { AvatarGroup } from '@material-ui/lab';
import Amit from '../../assets/styles/img/Amit.jpeg';
import Tamir from '../../assets/styles/img/Tamir.jpeg';
import Tair from '../../assets/styles/img/Tair.jpeg';
// import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';


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
                <AvatarGroup max={3}>
                    <Avatar className="avatar" alt="Amit" src={Amit} />
                    <Avatar className="avatar" alt="Tamir" src={Tamir} />
                    <Avatar className="avatar" alt="Tair" src={Tair} />
                </AvatarGroup>
                <div className="status">{task.status}</div>
                {/* <MuiPickersUtilsProvider utils={ }>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline" />
                </MuiPickersUtilsProvider> */}
                {/* <div>
                    <input type="date" className="input-date" />
                </div> */}
                <div className="priority">{task.priority}</div>
            </div>
        </div>
    )
}