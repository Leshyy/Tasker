import { Component } from 'react'

export class FilterModal extends Component {
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
                            return <div key={idx}> {priority.txt}</div>
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
                    <h1>Due-Date</h1>
                </div>
            </section>
        )
    }
}
