import { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { loadBoards, removeBoard, addBoard, updateBoards } from '../store/actions/boardAction'
import { BoardDetails } from '../cmps/board/BoardDetails'
import { BoardSideNav } from '../cmps/board/BoardSideNav'
import { AppHeader } from '../cmps/AppHeader'

class _BoardApp extends Component {
    state = {
        boardsForDisplay: null,
        isLoading: false
    }

    async componentDidMount() {
        this.setState({ isLoading: true })
        setTimeout(async () => {
            await this.loadBoards()
            const { boards } = this.props
            if (boards) {
                this.setState({ isLoading: false })
                this.props.history.push(`/board/${boards[0]._id}`)
                return
            }
            if (!boards || !boards.length) {
                return
            }
            this.setState({ isLoading: false })
        }, 4000);
    }

    loadBoards = async () => {
        await this.props.loadBoards()
    }

    onRemove = async (boardId) => {
        await this.props.removeBoard(boardId)
    }
    onAdd = async (board) => {
        await this.props.addBoard(board)
    }

    getBoradsForDisplay = async (filterBy) => {
        let { boards } = this.props
        const regex = new RegExp(filterBy, 'i')
        boards = boards.filter(board => regex.test(board.name))
        this.setState({ boardsForDisplay: boards })
    }

    render() {
        const { boards } = this.props
        const { boardsForDisplay } = this.state
        if (this.state.isLoading) return (
            <div className="loader-container flex center align-center">
                <video width="700" height="700" autoPlay loop preload="true">
                    <source src="loader.mp4" type="video/mp4"></source>
                </video>
            </div>
        )
        if (!boards) return <div>Loading no boards...</div>
        return (
            <section className="board-app flex">
                <AppHeader />
                <section className="board-main flex">
                    <BoardSideNav
                        boards={boardsForDisplay || boards}
                        getBoradsForDisplay={this.getBoradsForDisplay}
                        onRemove={this.onRemove}
                        onAdd={this.onAdd}
                    />
                    <Switch>
                        <Route path="/board/:boardId" component={BoardDetails} />
                    </Switch>
                </section>

            </section>
        )
    }
}
const mapGlobalStateToProps = (state) => {
    return {
        boards: state.boardReducer.boards,
        activeBoard: state.boardReducer.activeBoard,
    };
};
const mapDispatchToProps = {
    loadBoards,
    removeBoard,
    addBoard,
    updateBoards
}

export const BoardApp = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_BoardApp);