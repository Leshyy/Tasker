import { Component } from 'react'

import { Avatar } from '@material-ui/core';

export class FilterModal extends Component {
    state = {
        filterBy: {
            groupName: '',
            member: '',
            status: '',
            priority: '',
            date: '',
        }
    }

    filterGroup = (ev, field, value) => {
        var { groups } = this.props;
        var newGroups = [...groups];
        console.log('before filter', newGroups);
        ev.stopPropagation();
        var filterBy = { ...this.state.filterBy };
        filterBy[field] = value;
        this.setState({ filterBy }, () => {
            if (filterBy.groupName) {
                newGroups = newGroups.filter(newGroup => newGroup.name === filterBy.groupName);
            }
            if (filterBy.member) {
                newGroups = newGroups.forEach(newGroup => {
                    let tasks = []
                    tasks = newGroup.tasks.forEach(task => {
                        task.members.some(member => {
                            if (member.fullname === filterBy.member) tasks.push(task)
                        })
                        if (tasks.length) {
                            newGroup.tasks = tasks
                        }
                    })
                })
            }
            if (filterBy.status) {
                newGroups = newGroups.forEach(newGroup => {
                    const tasks = newGroup.tasks.filter(task => task.status === filterBy.status)
                    if (tasks.length) {
                        newGroup.tasks = tasks
                        // groupsForDisplay.push(newGroup) //NEED TO FIX
                    }
                })
            }
            if (filterBy.priority) {
                newGroups = newGroups.forEach(newGroup => {
                    const tasks = newGroup.tasks.filter(task => task.priority === filterBy.priority)
                    if (tasks.length) {
                        newGroup.tasks = tasks
                        // groupsForDisplay.push(newGroup) //NEED TO FIX
                    }
                })
            }

            console.log('filtering by', filterBy);
            console.log('filtered groups', newGroups);
        })
    }

    // getDateRange = () => {
    //     const { groups } = this.props.activeBoard
    //     // console.log('groups is:', groups);
    //     const dateRange = []
    //     groups.map(group => {
    //         const groupsTask = group.tasks.map(task => {
    //             let start = task.dateRange.startDate
    //             let end = task.dateRange.endDate
    //             if (start === end) return start
    //             else return end
    //         })
    //         return dateRange.push(...groupsTask)
    //     })
    // }

    render() {
        const { activeBoard } = this.props
        return (
            <section className="filter-modal flex">
                <div className="column">
                    <h1>Group</h1>
                    <ul className="list groups clean-list">
                        {activeBoard.groups.map(group => {
                            return (
                                <li
                                    key={group.id}
                                    onClick={(ev) => this.filterGroup(ev, 'groupName', group.name)}
                                >
                                    {group.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="column">
                    <h1>Member</h1>
                    <ul className="list clean-list member">
                        {activeBoard.members.map((member) => {
                            return (
                                <li
                                    className="member-tab flex align-center"
                                    key={member._id}
                                    onClick={(ev) => this.filterGroup(ev, 'member', member.fullname)}
                                >
                                    <Avatar
                                        className="avatar"
                                        alt={`${member.fullname}`}
                                        src={member.imgUrl}
                                    />
                                    <span className="member-name">{member.fullname}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="column">
                    <h1>Priority</h1>
                    <ul className="list priorities clean-list">
                        {activeBoard.priority.map((priority, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className="priority"
                                    style={{ background: priority.color }}
                                    onClick={(ev) => this.filterGroup(ev, 'priority', priority.txt)}
                                >
                                    {priority.txt}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="column">
                    <h1>Status</h1>
                    <ul className="list statuses clean-list">
                        {activeBoard.status.map((status, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className="status"
                                    style={{ background: status.color }}
                                    onClick={(ev) => this.filterGroup(ev, 'status', status.txt)}
                                >
                                    {status.txt}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="column">
                    <h1>Due Date</h1>
                    <ul className="list dates clean-list">
                        <li onClick={(ev) => this.filterGroup(ev, 'date', 'today')}>Today</li>
                        <li onClick={(ev) => this.filterGroup(ev, 'date', 'tomorrow')}>Tomorrow</li>
                        <li onClick={(ev) => this.filterGroup(ev, 'date', 'this week')}>This Week</li>
                    </ul>
                </div>

                <div className="column">
                    <h1>Passed Date</h1>
                    <ul className="list dates clean-list">
                        <li onClick={(ev) => this.filterGroup(ev, 'date', 'all passed')}>All Passed</li>
                        <li onClick={(ev) => this.filterGroup(ev, 'date', 'yesterday')}>Yesterday</li>
                        <li onClick={(ev) => this.filterGroup(ev, 'date', 'last week')}>Last Week</li>
                    </ul>
                </div>
            </section >
        )
    }
}
