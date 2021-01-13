import { Component } from 'react'
import { BoardDetails } from '../cmps/BoardDetails'
import { BoardSideNav } from '../cmps/BoardSideNav'

export class BoardApp extends Component {

    componentDidMount() {
        // load boards, for now just get data from json
    }


    render() {
        return (
            <section className="board-app">
                <BoardSideNav />
                <BoardDetails />

            </section>
        )
    }
}
