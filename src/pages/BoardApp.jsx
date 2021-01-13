import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { BoardDetails } from '../cmps/BoardDetails'
import { BoardSideNav } from '../cmps/BoardSideNav'

export class BoardApp extends Component {

    componentDidMount() {
        // load boards, for now just get data from json
    }


    render() {
        return (
            <section className="board-app flex">
                <BoardSideNav />
                <Switch>
                    <Route path="/board/:boardId" component={BoardDetails} />
                    {/* <BoardDetails /> */}
                </Switch>

            </section>
        )
    }
}
