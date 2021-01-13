import { BoardList } from "./BoardList";

export function BoardSideNav({ boards, onRemove }) {
    return (
        <div>
            <h2>sidenav</h2>
            <BoardList boards={boards} onRemove={onRemove} />
        </div>
    )
}
