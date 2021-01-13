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
        console.log('state on input', this.state.task);
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
                        type="text"
                        name="txt"
                        placeholder="Add task"
                        value={task.txt}
                        onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
