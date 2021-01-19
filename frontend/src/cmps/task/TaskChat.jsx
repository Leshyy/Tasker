import { Component } from 'react'

export class TaskChat extends Component {
    state = {
        clickedInput: false
    }
    componentDidMount() {
    }

    toggleShowTextArea = () => {
        this.setState({ clickedInput: !this.state.clickedInput })
    }

    render() {
        const { clickedInput } = this.state
        return (
            <section className="task-chat" >
                <div className="task-name-container">
                    <span>{this.props.task.name}</span>
                </div>
                {!clickedInput &&
                    <input type="text" onFocus={this.toggleShowTextArea} placeholder="write something..." />}
                {clickedInput &&
                    <div className="comment-wrapper">
                        <textarea autoFocus="true" onBlur={this.toggleShowTextArea} />
                        <button>update</button>
                    </div>
                }
            </section>
        )
    }
}
