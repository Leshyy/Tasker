import { Component } from 'react'

export class BoardFilter extends Component {
    render() {
        return (
            <section className="board-filter">
                <input type="text" placeholder="Search..." />
            </section>
        )
    }
}
