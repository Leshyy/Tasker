import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import { Component } from 'react';

export class BoardPreview extends Component {
    render() {
        const { board, onRemove } = this.props
        return (
            <section className="board-preview flex">
                <DeleteIcon
                    className="delete-board-btn"
                    onClick={() => {
                        onRemove(board._id)
                    }}
                />
                <Link to={`/board/${board._id}`}>
                    {board.name}
                </Link>
            </section >
        )

    }
}
