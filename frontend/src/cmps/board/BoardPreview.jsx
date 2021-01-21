import { Link } from 'react-router-dom'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Component } from 'react';
import { BoardSideNavModal } from './BoardSideNavModal';

export class BoardPreview extends Component {
    state = {
        isModalShown: false,
        isModalDeleteShown: false
    }

    toggleModal = () => {
        var { isModalShown } = this.state
        this.setState({ isModalShown: !isModalShown })
    }
    onOpenModalDelete = () => {
        var { isModalDeleteShown } = this.state
        this.setState({ isModalDeleteShown: !isModalDeleteShown })
    }

    render() {
        const { board, onRemove } = this.props
        return (
            <section className="board-preview flex align-center" >
                <Link to={`/board/${board._id}`}>
                    {board.name}
                </Link>
                <MoreHorizIcon onClick={this.toggleModal} />
                {this.state.isModalShown &&
                    <BoardSideNavModal
                        board={board}
                        onOpenModalDelete={this.onOpenModalDelete}
                    />}

                {this.state.isModalShown &&
                    <div
                        className="screen"
                        onClick={this.toggleModal}
                    />}

                {this.state.isModalDeleteShown &&
                    <div className="modal-delete">
                        <button>Delete</button>
                        <button>Go Back</button>
                    </div>}
            </section >

        )

    }
}
