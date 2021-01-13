import { GroupPreview } from './GroupPreview'

export function GroupList({ groups, onAddTask }) {
    return (
        <section className="group-list">
            {groups.map(group => {
                return <GroupPreview key={group.id} onAddTask={onAddTask} group={group} />
            })}
        </section>
    )
}
