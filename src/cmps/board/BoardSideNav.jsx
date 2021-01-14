import { render } from "@testing-library/react";
import { Component } from "react";
import { BoardFilter } from "./BoardFilter";
import { BoardList } from "./BoardList";

export class BoardSideNav extends Component {

    render() {
        const { boards, onRemove, onAdd, getBoradsForDisplay } = this.props;
        return (
            <section className="board-side-nav flex">
                <div className="side-nav-toggle">&gt;</div>
                <h2>My Boards:</h2>
                <button onClick={() => {
                    onAdd('new board')
                }}>add board</button>
                <BoardFilter getBoradsForDisplay={getBoradsForDisplay} />
                <BoardList boards={boards}
                    onRemove={onRemove}
                />
            </section>
        )
    }
}
