
export function Priority(props) {
    const { Priority, openModal, handleChangeModal, isPriorityShown } = props

    return (
        <div>
            <div>
                {Priority}
            </div>
            <div>
                {isPriorityShown &&
                    <div className="modal-status" onClick={props.closeModal}>
                        <div onClick={() => handleChangeModal('High')}>High</div>
                        <div onClick={() => handleChangeModal('Kaha kaha')}>Kaha kaha</div>
                        <div onClick={() => handleChangeModal('Low')}>Low</div>
                    </div>}
            </div>
        </div>
    )
}
