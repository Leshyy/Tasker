import { Component } from 'react'
import { TaskList } from '../tasks/TaskList'
export class GroupPreview extends Component {
    render() {
        const { group } = this.props
        return (
            <section className="group-preview">
                <div className="header-group flex">
                    <div className="header-left flex">
                        <button>Edit</button>
                        <h2>{group.name}</h2>
                    </div>
                    <div className="header-right flex">
                        <h3>Members</h3>
                        <h3>Status</h3>
                        <h3>Due-date</h3>
                        <h3>Priority</h3>
                    </div>
                </div>
                <div>
                    {group.tasks.map(task => {
                        return <TaskList key={task.id} task={task} />
                    })}

                </div>
            </section>
        )
    }
}
