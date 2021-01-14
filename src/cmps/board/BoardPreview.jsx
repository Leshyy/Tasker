import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';

export function BoardPreview({ board, onRemove }) {
    return (
        <section className="board-preview flex">
            <DeleteIcon
                className="delete-board-btn"
                onClick={() => {
                    onRemove(board._id)
                }} />
            <Link to={`/board/${board._id}`}>{board.name}</Link>
        </section>
    )
}
