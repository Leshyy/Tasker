import React, { Component } from 'react'
import { loadBoards } from '../store/actions/boardAction'
import { AppHeader } from '../cmps/AppHeader'
import Calendar from '../assets/styles/img/calendar.png'
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux'
import { ListMyWeek } from '../cmps/ListMyWeek';

export class _MyWeek extends Component {
    state = {
        boardsForDisplay: null
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

    render() {
        const { boards } = this.props
        // console.log('boards is:', boards);
        return (
            <React.Fragment>
                <AppHeader />
                <section className="my-week">
                    <div className="top flex align-center">
                        <img src={Calendar} alt="" />
                        <h2>Hey Amit !!,You have 4 assignments this week</h2>
                    </div>
                    <div className="bottom">
                        <Input type="text" placeholder="Search.." />
                        <ListMyWeek boards={boards} />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
const mapGlobalStateToProps = (state) => {
    return {
        boards: state.boardReducer.boards,
        activeBoard: state.boardReducer.activeBoard
    };
};
const mapDispatchToProps = {
    loadBoards,

}

export const MyWeek = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_MyWeek);
