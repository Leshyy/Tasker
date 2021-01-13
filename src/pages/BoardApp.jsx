import { Component } from 'react'
import { BoardList } from '../cmps/BoardList'

export class BoardApp extends Component {
    render() {
        return (
            <section className="board-app">
                <BoardList />
            </section>
        )
    }
}
