import { BoardFilter } from "./BoardFilter";
import { BoardList } from "./BoardList";
import Button from '@material-ui/core/Button';

export function BoardSideNav({ boards, onRemove, onAdd, getBoradsForDisplay }) {
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
