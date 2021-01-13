import { BoardPreview } from "./BoardPreview";

export function BoardList({ boards }) {
    return (
        <section className="board-list">
            {boards.map(board => {
                return <BoardPreview
                    key={board.id}
                    board={board}
                />
            })}
        </section>
    )
}

