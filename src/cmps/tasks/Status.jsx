
export function Status(props) {

    const { status, openModal, handleChangeModal, isStatusShown } = props
    return (
        < div >
            <div onClick={(ev) => openModal(ev)}>
                {status}
            </div>
            {
                isStatusShown &&
                <div className="modal-status" onClick={props.closeModal}>
                    <div onClick={() => handleChangeModal('Stuck', 'status')}>Stuck</div>
                    <div onClick={() => handleChangeModal('Working on it', 'status')}>Working on it</div>
                    <div onClick={() => handleChangeModal('Completed', 'status')}>Completed</div>
                </div>
            }
        </div >
    )
}

