import { Component } from 'react'
import { connect } from 'react-redux'
import { GroupList } from './groups/GroupList'
import { loadBoard } from '../store/actions/boardAction'

export class _BoardDetails extends Component {


    componentDidMount() {
        // get board id from url and set it to state
        this.loadActiveBoard()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.boardId !== this.props.match.params.boardId) {
            this.loadActiveBoard()
        }
    }
    loadActiveBoard = () => {
        const boardId = this.props.match.params.boardId
        this.props.loadBoard(boardId)
    }

    render() {
        const { activeBoard } = this.props
        if (!activeBoard) return <div>Loading...</div>
        return (
            <section>
                <h1>{activeBoard.name}</h1>
                <h1>{activeBoard.desc}</h1>
                <GroupList groups={activeBoard.groups} />

            </section>
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
    loadBoard,
}

export const BoardDetails = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_BoardDetails);