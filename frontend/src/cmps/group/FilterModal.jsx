import { Component } from 'react'

export class FilterModal extends Component {
    getDateRange = () => {
        const { groups } = this.props.activeBoard
        // console.log('groups is:', groups);
        const dateRange = []
        groups.map(group => {
            const groupsTask = group.tasks.map(task => {
                let start = task.dateRange.startDate
                let end = task.dateRange.endDate
                if (start === end) return start
                else return end
            })
            return dateRange.push(...groupsTask)
        })
    }

    render() {
        const { activeBoard } = this.props
        return (
            <section className="filter-modal flex">
                <div className="col-modal">
                    <h1>Groups</h1>
                    <div className="filter-list">
                        {activeBoard.groups.map(group => {
                            return <div key={group.id}>{group.name}</div>
                        })}
                    </div>
                </div>

                <div className="col-modal">
                    <h1>Members</h1>
                </div>

                <div className="col-modal"><h1>Prioritys</h1>
                    <div className="filter-list">
                        {activeBoard.priority.map((priority, idx) => {
                            return <div key={idx} className="status" style={{ background: priority.color }}> {priority.txt}</div>
                        })}
                    </div>
                </div>

                <div className="col-modal">
                    <h1>Status</h1>
                    <div className="filter-list">
                        {activeBoard.status.map((status, idx) => {
                            return <div key={idx} className="status" style={{ background: status.color }}>
                                {status.txt}
                            </div>
                        })}
                    </div>
                </div>

                <div className="col-modal">
                    <h1 onClick={this.getDateRange}>TimeLine</h1>
                </div>
            </section>
        )
    }
}
