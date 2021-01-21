
export function DeleteModalGroup({ group, onRemoveGroup, onCloseModalDelete }) {

    return (
        < div className="modal-delete flex col space-between" >
            <div className="top">
                <p>You're sure want to delete Group? "{group.name}"</p>
            </div>
            <div className="bottom flex align-center">
                <button className="btn-delete" onClick={(ev) => onRemoveGroup(ev, group.id)}>Delete</button>
                <button className="btn-go-back" onClick={onCloseModalDelete}>Go Back</button>
            </div>
        </div >
    )
}
