import { Component } from "react";
import { BoardFilter } from "./BoardFilter";
import { BoardList } from "./BoardList";


export class BoardSideNav extends Component {

    render() {
        const { boards, onRemove, onAdd, getBoradsForDisplay } = this.props
        return (
            <section className="board-side-nav flex col">
                <div className="board-side-nav-top flex align-center space-between">
                    <h2>My Boards:</h2>
                    <button
                        className="btn-add"
                        variant="contained"
                        color="default"
                        onClick={() => {
                            onAdd('new board')
                        }}>+</button>
                </div>
                <div className="board-side-nav-bottom flex col">
                    <BoardFilter getBoradsForDisplay={getBoradsForDisplay} />
                    <BoardList
                        boards={boards}
                        onRemove={onRemove}
                    />
                </div>
            </section>
        )
    }
}
