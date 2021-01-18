import { Component } from "react";
import { BoardFilter } from "./BoardFilter";
import { BoardList } from "./BoardList";
import { AddCircleOutlineRounded } from "@material-ui/icons";


export class BoardSideNav extends Component {

    render() {
        const { boards, onRemove, onAdd, getBoradsForDisplay } = this.props
        return (
            <section className="board-side-nav flex col">
                <div className="board-side-nav-top flex col align-start space-between">
                    {/* <button className="btn-toggle-sidenav">&gt;</button> */}
                    <h2>My Boards:</h2>
                    <button
                        className="btn-add flex align-center"
                        onClick={() => {
                            onAdd('new board')
                        }}><AddCircleOutlineRounded /> Add</button>
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
