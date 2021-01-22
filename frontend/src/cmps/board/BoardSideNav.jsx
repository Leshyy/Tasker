import { Component } from "react";
import { AddCircleOutlineRounded } from "@material-ui/icons";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { BoardFilter } from "./BoardFilter";
import { BoardList } from "./BoardList";


export class BoardSideNav extends Component {
    state = {
        isBarShown: true,
        isInputShown: false,
        nameNewBoard: ''
    }

    toggleShownBar = () => {
        var { isBarShown } = this.state
        isBarShown = !isBarShown
        this.setState({ isBarShown })
    }

    toggleInput = () => {
        const { isInputShown } = this.state
        this.setState({ isInputShown: !isInputShown })

    }

    handelChange = (ev) => {
        var nameNewBoard = { ...this.state.nameNewBoard }
        nameNewBoard = ev.target.value
        this.setState({ nameNewBoard })
    }

    addBoard = (ev) => {
        ev.preventDefault()
        const { onAdd } = this.props
        const { nameNewBoard } = this.state
        console.log('nameNewBoard is:', nameNewBoard);
        onAdd(nameNewBoard)
        this.toggleInput()
    }

    // onUpdateBoardName = (boardName) => {
    //     const { activeBoard, boards } = this.props
    //     const updatedBoard = { ...activeBoard }
    //     updatedBoard.name = boardName
    //     this.props.updateBoard(updatedBoard)
    //     this.props.updateBoards(updatedBoard, boards)
    // }

    render() {
        const { boards, onRemove, getBoradsForDisplay } = this.props
        return (
            <section className={`${(this.state.isBarShown) ? `board-side-nav flex col` : `board-side-nav-close`}`}>
                <div className="board-side-nav-top flex col align-start space-between">
                    <button
                        className="btn-toggle-sidenav flex center align-center"
                        onClick={this.toggleShownBar}>
                        {(this.state.isBarShown) ? <ArrowBackIosIcon className="arrow-back" /> : <ArrowForwardIosIcon />}
                    </button>
                    <h2>My Boards:</h2>
                    <button
                        className="btn-add flex align-center"
                        onClick={this.toggleInput}>
                        {/* onClick={() => onAdd('new board')}> */}
                        <AddCircleOutlineRounded />
                        Add
                    </button>
                </div>
                <div className="board-side-nav-bottom flex col">
                    <BoardFilter
                        getBoradsForDisplay={getBoradsForDisplay}
                    />
                    <BoardList
                        boards={boards}
                        onRemove={onRemove}
                    />
                    {this.state.isInputShown &&
                        <form onSubmit={(ev) => this.addBoard(ev)}>
                            <input
                                className="input-new-board"
                                type="text"
                                placeholder="Enter board name"
                                onChange={this.handelChange}
                                autoFocus />
                        </form>}

                </div>
            </section>
        )
    }
}
