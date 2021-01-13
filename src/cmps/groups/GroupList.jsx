import { Component } from 'react'
import { GroupPreview } from './GroupPreview'

export class GroupList extends Component {
    render() {
        return (
            <section className="group-list">
                <GroupPreview />
            </section>
        )
    }
}
