import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { BoardDetails } from '../cmps/board/BoardDetails'
import { BoardSideNav } from '../cmps/board/BoardSideNav'
import { loadBoards, removeBoard, addBoard } from '../store/actions/boardAction'

class _BoardApp extends Component {
    componentDidMount() {
        this.loadBoards()
    }
    loadBoards = () => {
        this.props.loadBoards()
    }

    onRemove = async (boardId) => {
        await this.props.removeBoard(boardId)
        this.props.history.push('/board');
        this.loadBoards()
    }
    onAdd = async (board) => {
        await this.props.addBoard(board)
        console.log('active board', this.props.activeBoard);
        this.props.history.push(`/board/${this.props.activeBoard._id}`);
        this.loadBoards()
    }


    render() {
        const { boards } = this.props
        if (!boards) return <div>Loading no boards...</div>
        return (
            <section className="board-app flex">
                <BoardSideNav
                    boards={boards}
                    onRemove={this.onRemove}
                    onAdd={this.onAdd}
                />
                <Switch>
                    <Route path="/board/:boardId" component={BoardDetails} />
                </Switch>

            </section>
        )
    }
}
const mapGlobalStateToProps = (state) => {
    return {
        boards: state.boardReducer.boards,
        activeBoard: state.boardReducer.activeBoard
    };
};
const mapDispatchToProps = {
    loadBoards,
    removeBoard,
    addBoard
}

export const BoardApp = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_BoardApp);