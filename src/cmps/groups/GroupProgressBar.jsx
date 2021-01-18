
export function GroupProgressBar({ tasks, activeBoard }) {
    const priorityCounter = {}
    const statusCounter = {}
    activeBoard.status.map(option => {
        statusCounter[option.txt] = 0
    })
    activeBoard.priority.map(option => {
        priorityCounter[option.txt] = 0
    })
    tasks.forEach(task => {
        priorityCounter[task.priority]++
        statusCounter[task.status]++
    })
    return (
        <section className="group-progress-bar flex">
            <div className="priority-prog-bar flex">
                {activeBoard.priority.map((option, idx) => {
                    return <div
                        key={idx}
                        data-title=
                        {`${option.txt} ${priorityCounter[option.txt]} / ${tasks.length}
                         ${(priorityCounter[option.txt] / tasks.length * 100).toFixed()}%`}
                        style=
                        {{
                            backgroundColor: option.color,
                            width: (priorityCounter[option.txt] / tasks.length * 100) + '%'
                        }}
                    />
                })}
                {/* <div style={{ width: `${(priorityCounter.High / tasks.length * 100).toFixed()}%` }}
                    className="red"
                    data-title={`High ${priorityCounter.High} / ${tasks.length} ${(priorityCounter.High / tasks.length * 100).toFixed()}%`}
                />
                <div style={{ width: `${(priorityCounter.Medium / tasks.length * 100).toFixed()}%` }}
                    className="orange"
                    data-title={`Medium ${priorityCounter.Medium} / ${tasks.length} ${(priorityCounter.Medium / tasks.length * 100).toFixed()}%`}
                />
                <div style={{ width: `${(priorityCounter.Low / tasks.length * 100).toFixed()}%` }}
                    className="green"
                    data-title={`Low ${priorityCounter.Low} / ${tasks.length} ${(priorityCounter.Low / tasks.length * 100).toFixed()}%`}
                /> */}
            </div>
            <div className="status-prog-bar flex">
                {activeBoard.status.map((option, idx) => {
                    return <div
                        key={idx}
                        data-title=
                        {`${option.txt} ${statusCounter[option.txt]} / ${tasks.length}
                         ${(statusCounter[option.txt] / tasks.length * 100).toFixed()}%`}
                        style=
                        {{
                            backgroundColor: option.color,
                            width: (statusCounter[option.txt] / tasks.length * 100) + '%'
                        }}
                    />
                })}

            </div>
        </section>
    )
}
