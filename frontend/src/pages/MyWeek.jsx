import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import { loadBoards } from '../store/actions/boardAction'
import { AppHeader } from '../cmps/AppHeader'
import { ListMyWeek } from '../cmps/ListMyWeek'
import Calendar from '../assets/icons/calendar.png'
import { userService } from '../services/userService'

export class _MyWeek extends Component {
    state = {
        boardsForDisplay: null,
        isTaskShown: true,
        filterBy: {
            txt: ''
        }
    }
    componentDidMount() {
        this.loadBoards()
        const { boards } = this.props
        if (!boards || !boards.length) {
            return
        }
    }

    loadBoards = () => {
        this.props.loadBoards()
    }

    toggleTasksMode = () => {
        this.setState({ isTaskShown: !this.state.isTaskShown })
    }
    handleChange = (ev) => {
        console.log('aa is:');
        var filterBy = { ...this.state.filterBy }
        filterBy.txt = ev.target.value
        this.setState({ filterBy })
        this.getBoardsForDisplay()
    }
    getBoardsForDisplay = () => {
        // const { boards } = this.props
        const { filterBy } = this.state
        if (!filterBy) return this.setState({ boardForDisplay: null })
        // const regex = new RegExp(filterBy.txt, 'i')
        // boards = boards.groups.filter(group => {
        //     group.tasks.filter(task => (regex.test(task.name)))
        //     return group
        // })
        // return boards
    }

    render() {
        const { boards, loggedInUser } = this.props
        const { isTaskShown } = this.state
        return (
            <React.Fragment>
                <AppHeader />
                <section className="my-week">
                    <div className="top flex space-around align-center">
                        <img src={Calendar} alt="" />
                        <h2>Hey {loggedInUser.username} ,You have 4 assignments this week</h2>
                    </div>
                    <Input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder="Search"
                        onChange={this.handleChange}
                    // value={filterBy.txt} 
                    />
                    <div className="bottom">
                        <div className="flex space-between">
                            <p>Tasks For You:</p>
                            <Button onClick={this.toggleTasksMode}>{(isTaskShown) ? 'Close tasks' : 'Open tasks'}</Button>
                        </div>
                        {isTaskShown && <ListMyWeek boards={boards} username={loggedInUser._id} />}
                    </div>
                </section>
            </React.Fragment >
        )
    }
}
const mapGlobalStateToProps = (state) => {
    return {
        loggedInUser: state.userReducer.loggedInUser,
        boards: state.boardReducer.boards
    };
};
const mapDispatchToProps = {
    loadBoards,

}

export const MyWeek = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_MyWeek);
