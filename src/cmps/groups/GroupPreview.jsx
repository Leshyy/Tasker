import { Component } from 'react'
import { TaskAdd } from '../tasks/TaskAdd'
import { TaskList } from '../tasks/TaskList'

export class GroupPreview extends Component {
    render() {
        const { group, onAddTask, onRemoveTask } = this.props
        const { tasks } = group
        if (!tasks) return <div>No TASKSSS</div>
        console.log('tasks tamir hreeerere is:', tasks);
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
                        {/* <h3>Notes</h3> */}
                    </div>
                </div>
                <div>
                    <TaskList tasks={tasks} group={group} onRemoveTask={onRemoveTask} />
                </div>
                <TaskAdd onAddTask={onAddTask} groupId={group.id} />

            </section>
        )
    }
}
