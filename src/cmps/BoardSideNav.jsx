import { boardService } from "../services/boardService";
import { BoardList } from "./BoardList";

export function BoardSideNav() {
    return (
        <div>
            <h2>sidenav</h2>
            <BoardList boards={boardService.query()} />
        </div>
    )
}