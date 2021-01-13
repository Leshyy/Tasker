import { Component } from 'react'
import { TaskList } from '../tasks/TaskList'
export class GroupPreview extends Component {
    render() {
        return (
            <section className="group-preview">
                <div className="header-group flex">
                    <div className="header-left flex">
                        <button>Edit</button>
                        <h2>name group</h2>
                    </div>
                    <div className="header-right flex">
                        <h3>Members</h3>
                        <h3>Status</h3>
                        <h3>Due-date</h3>
                        <h3>Priority</h3>
                    </div>
                </div>
                <div>
                    <TaskList />
                </div>
            </section>
        )
    }
}
