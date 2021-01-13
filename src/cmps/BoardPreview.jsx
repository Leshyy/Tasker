import { Component } from 'react'
import { GroupList } from './groups/GroupList'

export class BoardPreview extends Component {
    render() {
        return (
            <section className="board-preview">
                <GroupList />
            </section>
        )
    }
}
