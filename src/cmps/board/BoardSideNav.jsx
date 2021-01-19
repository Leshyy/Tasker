import { Component } from "react";
import { BoardFilter } from "./BoardFilter";
import { BoardList } from "./BoardList";
import { AddCircleOutlineRounded } from "@material-ui/icons";


export class BoardSideNav extends Component {
    state = {
        isBarShown: true
    }

    toggleShownBar = () => {
        var { isBarShown } = this.state
        isBarShown = !isBarShown
        this.setState({ isBarShown })
        console.log('isBarShown is:', isBarShown)
    }
    render() {
        const { boards, onRemove, onAdd, getBoradsForDisplay } = this.props
        const left = '&lt;'
        // const right = 
        return (
            <section className={`${(this.state.isBarShown) ? `board-side-nav flex col` : `board-side-nav-close`}`}>
                <div className="board-side-nav-top flex col align-start space-between">
                    <button className="btn-toggle-sidenav" onClick={this.toggleShownBar}>{(this.state.isBarShown) ? '<' : '>'}</button>
                    <h2>My Boards:</h2>
                    <button
                        className="btn-add flex align-center"
                        onClick={() => {
                            onAdd('new board')
                        }}><AddCircleOutlineRounded /> Add</button>
                </div>
                <div className="board-side-nav-bottom flex col">
                    <BoardFilter getBoradsForDisplay={getBoradsForDisplay} />
                    <BoardList
                        boards={boards}
                        onRemove={onRemove}
                    />
                </div>
            </section>
        )
    }
}
