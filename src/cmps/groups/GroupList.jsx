import { GroupPreview } from './GroupPreview'

export function GroupList({ groups, onAddTask, onRemoveTask }) {
    return (
        <section className="group-list">
            {groups.map(group => {
                return <GroupPreview key={group.id} onRemoveTask={onRemoveTask} onAddTask={onAddTask} group={group} />
            })}
        </section>
    )
}
