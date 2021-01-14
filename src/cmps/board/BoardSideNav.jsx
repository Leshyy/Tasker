import { BoardFilter } from "./BoardFilter";
import { BoardList } from "./BoardList";

export function BoardSideNav({ boards, onRemove, onAdd, getBoradsForDisplay }) {
    return (
        <section className="board-side-nav flex">
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
