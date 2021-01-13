import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { BoardDetails } from '../cmps/BoardDetails'
import { BoardSideNav } from '../cmps/BoardSideNav'
import { boardService } from '../services/boardService'

export class BoardApp extends Component {
    state = {
        boards: null
    }

    componentDidMount() {
        this.loadBoards()
    }
    loadBoards = () => {
        const boards = boardService.query()

        this.setState({ boards })
    }

    onRemove = (boardId) => {
        boardService.remove(boardId)
        this.loadBoards()
    }


    render() {
        const { boards } = this.state
        if (!boards) return <div>Loading...</div>
        return (
            <section className="board-app flex">
                <BoardSideNav boards={boards} onRemove={this.onRemove} />
                <Switch>
                    <Route path="/board/:boardId" component={BoardDetails} />
                </Switch>

            </section>
        )
    }
}
