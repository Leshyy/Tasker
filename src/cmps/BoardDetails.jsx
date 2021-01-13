import { Component } from 'react'
import { GroupList } from './groups/GroupList'

export class BoardDetails extends Component {
    state = {
        board: null,
    }

    componentDidMount() {
        // get board id from url and set it to state
    }


    render() {
        const { board } = this.state
        if (!board) return <div>Loading...</div>
        return (
            <section>
                <h1>board.name</h1>
                <h1>board.name</h1>
                <GroupList />

            </section>
        )
    }
}
