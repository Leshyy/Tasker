import { Component } from "react";
import { BoardFilter } from "./BoardFilter";
import { BoardList } from "./BoardList";


export class BoardSideNav extends Component {

    render() {
        const { boards, onRemove, onAdd, getBoradsForDisplay } = this.props
        return (
            <section className="board-side-nav flex">
                <div className="flex align-center space-between">
                    <h2>My Boards:</h2>
                    <button
                        className="btn-add"
                        variant="contained"
                        color="default"
                        onClick={() => {
                            onAdd('new board')
                        }}>+</button>
                </div>
                <BoardFilter getBoradsForDisplay={getBoradsForDisplay} />
                <BoardList boards={boards}
                    onRemove={onRemove}
                />
            </section>
        )
    }
}
