import { GroupPreview } from './GroupPreview'

export function GroupList({ groups, onAddTask, onRemoveTask, onRemoveGroup }) {
    return (
        <section className="group-list">
            {groups.map(group => {
                return <GroupPreview
                    key={group.id}
                    onRemoveTask={onRemoveTask}
                    onAddTask={onAddTask}
                    group={group}
                    onRemoveGroup={onRemoveGroup}
                />
            })}
        </section>
    )
}
