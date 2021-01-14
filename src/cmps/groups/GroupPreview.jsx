import { TaskAdd } from '../tasks/TaskAdd'
import { TaskList } from '../tasks/TaskList'

export function GroupPreview({ group, onAddTask, onRemoveTask, onUpdateTask, onRemoveGroup }) {
    const { tasks } = group
    return (
        <section className="group-preview">
            <div className="header-group flex">
                <div className="header-left flex">
                    <button>Edit</button>
                    <button onClick={() => {
                        onRemoveGroup(group.id)
                    }}>Delete Group</button>
                    <h2>{group.name}</h2>
                </div>
                <div className="header-right flex">
                    <h3>Members</h3>
                    <h3>Status</h3>
                    <h3>Due-date</h3>
                    <h3>Priority</h3>
                    {/* <h3>Notes</h3> */}
                </div>
            </div>
            <TaskList
                tasks={tasks}
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
