import { GroupPreview } from './GroupPreview'

export function GroupList({ groups }) {
    return (
        <section className="group-list">
            {groups.map(group => {
                return <GroupPreview key={group.id} group={group} />
            })}
        </section>
    )
}
