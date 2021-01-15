
export function TaskPropertyModal({ options, type, handleChangeModal }) {
    console.log('hen is:', type);
    return (
        <div className=" task-property-modal ">
            {options.map((option, idx) => {
                return <div key={idx} className={option} onClick={() => handleChangeModal(option, type)}> {option}</div>
            })}
        </div >
    )

}
