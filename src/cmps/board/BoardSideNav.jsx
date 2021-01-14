import { Component } from "react";
import { BoardFilter } from "./BoardFilter";
import { BoardList } from "./BoardList";
import Button from '@material-ui/core/Button';

export class BoardSideNav extends Component {

    render() {
        const { boards, onRemove, onAdd, getBoradsForDisplay } = this.props
        return (
            <section className="board-side-nav flex">

                <h2>My Boards:</h2>
                <Button
                    variant="contained"
                    color="default"
                    onClick={() => {
                        onAdd('new board')
                    }}>add board</Button>
                <BoardFilter getBoradsForDisplay={getBoradsForDisplay} />
                <BoardList boards={boards}
                    onRemove={onRemove}
                />
            </section>
        )
    }
}
