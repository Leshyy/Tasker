import { Link } from 'react-router-dom'

export function BoardPreview({ board, onRemove }) {
    return (
        <section className="board-preview">
            <Link to={`/board/${board._id}`}>{board.name}</Link>
            <button onClick={() => {
                onRemove(board._id)
            }}>X</button>
        </section>
    )
}
