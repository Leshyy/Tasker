import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderTwoToneIcon from '@material-ui/icons/StarBorderTwoTone';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

export function BoardSideNavModal({ board, onOpenModalDelete }) {
    // yossi = () => {

    // }

    return (
        <div className="modal-side-nave flex col">
            <span className="btn-in-modal flex align-center">
                <EditOutlinedIcon />
            Rename Board
            </span>
            <span className="btn-in-modal flex align-center">
                <StarBorderTwoToneIcon />
                Add to Favorites
            </span>
            <span onClick={onOpenModalDelete} className="btn-in-modal flex align-center">
                <DeleteIcon />
                    Delete Board</span>
        </div>
    )
}
