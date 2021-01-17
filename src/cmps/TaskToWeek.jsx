import { Component } from 'react'
import { Link } from 'react-router-dom'

export class TaskToWeek extends Component {
    state = {
        board: {},
        userTasks: []
    }
    componentDidMount() {
        const { board } = this.props
        this.setState({ board }, () => {

            this.findTasksPerUser('2h3j5b')
        })
    }

    findTasksPerUser = (userId) => {
        const { board } = this.state
        const { groups } = board
        const userTasks = []
        groups.forEach(group => {
            let tasks = group.tasks.filter(task => task.members.find(member => member._id === userId))
            if (tasks.length) {
                tasks = tasks.map(task => {
                    task.groupName = group.name
                    task.boardName = board.name
                    return task;
                })
                userTasks.push(...tasks)
            }
        })
        // userTasks.forEach(task => {
        //     console.log('task.name is:', task.name);
        //     return task.name
        // })
        this.setState({ userTasks: userTasks }, () => {

            console.log('userTasks is:', this.state.userTasks);
        })
        // return userTasks
    }
    render() {
        const { userTasks } = this.state
        return (
            <div>
                {userTasks.map(task => {
                    return <div className="tasks-user flex space-between">
                        <div className="left flex col">
                            <h3>{task.name}</h3>
                            <Link to="">{`At: ${task.boardName} < ${task.groupName}`}</Link>
                        </div>
                        <div className="right">
                            {task.dueDate}
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
