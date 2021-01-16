
export function GroupProgressBar({ tasks }) {
    const taskProgressWidth = 150 / tasks.length
    const priorityCounter = {
        High: 0,
        Medium: 0,
        Low: 0
    }
    const statusCounter = {
        Completed: 0,
        WorkingOnIt: 0,
        Stuck: 0
    }
    tasks.forEach(task => {
        priorityCounter[task.priority]++
        if (task.status === 'Working on it') statusCounter.WorkingOnIt++
        else statusCounter[task.status]++
    })
    return (
        <section className="group-progress-bar flex">
            <div className="priority-prog-bar flex">
                <div style={{ width: `${(priorityCounter.High / tasks.length * 100).toFixed()}%` }}
                    className="red"
                    data-title={`High ${priorityCounter.High} / ${tasks.length} ${(priorityCounter.High / tasks.length * 100).toFixed()}%`}
                />
                <div style={{ width: `${(priorityCounter.Medium / tasks.length * 100).toFixed()}%` }}
                    className="orange"
                    data-title={`Medium ${priorityCounter.Medium} / ${tasks.length} ${(priorityCounter.Medium / tasks.length * 100).toFixed()}%`}
                />
                <div style={{ width: `${(priorityCounter.Low / tasks.length * 100).toFixed()}%` }}
                    className="green"
                    data-title={`High ${priorityCounter.Low} / ${tasks.length} ${(priorityCounter.Low / tasks.length * 100).toFixed()}%`}
                />
            </div>
            <div className="status-prog-bar flex">
                <div style={{ width: `${(statusCounter.Stuck / tasks.length * 100).toFixed()}%` }}
                    className="red"
                    data-title={`High ${statusCounter.Stuck} / ${tasks.length} ${(statusCounter.Stuck / tasks.length * 100).toFixed()}%`}
                />
                <div style={{ width: `${(statusCounter.WorkingOnIt / tasks.length * 100).toFixed()}%` }}
                    className="orange"
                    data-title={`High ${statusCounter.WorkingOnIt} / ${tasks.length} ${(statusCounter.WorkingOnIt / tasks.length * 100).toFixed()}%`}
                />
                <div style={{ width: `${(statusCounter.Completed / tasks.length * 100).toFixed()}%` }}
                    className="green"
                    data-title={`High ${statusCounter.Completed} / ${tasks.length} ${(statusCounter.Completed / tasks.length * 100).toFixed()}%`}
                />
            </div>
        </section>
    )
}
