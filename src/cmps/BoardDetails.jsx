import { Component } from 'react'
import { boardService } from '../services/boardService'
import { GroupList } from './groups/GroupList'

export class BoardDetails extends Component {
    state = {
        board: null,
    }

    componentDidMount() {
        // get board id from url and set it to state
        const boardId = this.props.match.params.boardId
        const board = boardService.getById(boardId)
        this.setState({ board })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.boardId !== this.props.match.params.boardId) {
            const boardId = this.props.match.params.boardId
            const board = boardService.getById(boardId)
            this.setState({ board })
        }
    }



    render() {
        const { board } = this.state
        if (!board) return <div>Loading...</div>
        return (
            <section>
                <h1>{board.name}</h1>
                <h1>{board.desc}</h1>
                <GroupList groups={board.groups} />

            </section>
        )
    }
}
