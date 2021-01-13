import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { BoardDetails } from '../cmps/BoardDetails'
import { BoardSideNav } from '../cmps/BoardSideNav'
import { loadBoards, removeBoard } from '../store/actions/boardAction'

class _BoardApp extends Component {
    componentDidMount() {
        this.loadBoards()
    }
    loadBoards = () => {
        this.props.loadBoards()
    }

    onRemove = async (boardId) => {
        await this.props.removeBoard(boardId)
        this.loadBoards()
    }


    render() {
        const { boards } = this.props
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
const mapGlobalStateToProps = (state) => {
    return {
        boards: state.boardReducer.boards
    };
};
const mapDispatchToProps = {
    loadBoards,
    removeBoard
}

export const BoardApp = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_BoardApp);