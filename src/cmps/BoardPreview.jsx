import { Component } from 'react'
import { Link } from 'react-router-dom'

export class BoardPreview extends Component {
    render() {
        const { board } = this.props
        return (
            <section className="board-preview">
                <Link to={`/board/${board._id}`}>{board.name}</Link>
            </section>
        )
    }
}
