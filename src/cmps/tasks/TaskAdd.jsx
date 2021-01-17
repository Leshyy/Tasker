import { Component } from 'react'

export class TaskAdd extends Component {
    state = {
        task: {
            txt: '',
        }
    }

    handleChange = (ev) => {
        var task = { ...this.state.task }
        var { name, value } = ev.target
        task[name] = value;
        this.setState({ task })
    };

    onAddTask = (ev) => {
        ev.preventDefault()
        const taskName = this.state.task.txt
        const { groupId } = this.props
        this.props.onAddTask(taskName, groupId)
        this.setState({
            task: {
                txt: '',
            }
        })

    }

    render() {
        const { task } = this.state
        return (
            <div>
                <form onSubmit={this.onAddTask}>
                    <input
                        autoComplete="off"
                        className="input-task"
                        type="text"
                        name="txt"
                        placeholder="+Add"
                        value={task.txt}
                        onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
