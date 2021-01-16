
export function TaskPropertyModal({ options, type, handleModalChange }) {
    console.log('hen is:', type);
    return (
        <div className=" task-property-modal ">
            {options.map((option, idx) => {
                return <div
                    key={idx}
                    className={option}
                    onClick={() => handleModalChange(option, type)}>
                    {option}
                </div>
            })}
        </div >
    )

}
