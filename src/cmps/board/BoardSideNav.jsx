import { BoardList } from "./BoardList";

export function BoardSideNav({ boards, onRemove, onAdd }) {
    return (
        <div>
            <h2>My Boards:</h2>
            <button onClick={() => {
                onAdd('new board')
            }}>add board</button>
            <BoardList boards={boards}
                onRemove={onRemove}
            />
        </div>
    )
}
