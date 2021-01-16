import { TaskAdd } from '../tasks/TaskAdd'
import { TaskList } from '../tasks/TaskList'
import DeleteIcon from '@material-ui/icons/Delete';

export function GroupPreview({ group, onAddTask, onRemoveTask, onUpdateTask, onRemoveGroup, onUpdateGroup }) {
    return (
        <section className="group-preview" style={{ color: group.color }}>
            <div className="header-group flex">
                <div className="header-left flex">
                    <DeleteIcon
                        className="delete-icon"
                        onClick={() => {
                            onRemoveGroup(group.id)
                        }}
                    />
                    <span
                        className="group-name editable"
                        contentEditable="true"
                        onBlur={(ev) => {
                            console.log(ev.target.innerText);
                            const updatedGroup = { ...group }
                            updatedGroup.name = ev.target.innerText
                            onUpdateGroup(updatedGroup)

                        }}
                        suppressContentEditableWarning={true}
                    >
                        {group.name}
                    </span>
                </div>
                <div className="header-right flex">
                    <h3>Members</h3>
                    <h3>Status</h3>
                    <h3>Due-date</h3>
                    <h3>Priority</h3>
                    <h3>Notes</h3>
                </div>
            </div>
            <TaskList
                tasks={group.tasks}
                group={group}
                onUpdateTask={onUpdateTask}
                onRemoveTask={onRemoveTask}
            />
            <TaskAdd
                onAddTask={onAddTask}
                groupId={group.id}
            />

        </section>
    )

}
