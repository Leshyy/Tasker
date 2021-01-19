import logo from '../assets/styles/logo/logo.png'

import { Component } from 'react'
import { connect } from 'react-redux'
import { loadBoards } from '../store/actions/boardAction'
import { Link } from 'react-router-dom'

class _Home extends Component {

    state = {
        boards: null
    }

    render() {
        return (
            <section className="home flex col" >
                <div className="home-header flex start align-center">
                    <Link to="/board" title="My Boards">Boards</Link>
                    <Link to="/" title="Login">Login</Link>
                    <Link to="/" title="Sign-Up">Sign-Up</Link>
                </div>
                <div className="home-main flex">
                    <div className="first-panel flex col center align-start">
                        <h1>Join the future</h1>
                        <p>
                            The next step in multi-planning and productivity!
                         <br />
                            <span>Tasker</span> will help you keep track of hundreds of tasks.
                        <br />
                        An efficient way to manage your co-workers / employees.
                        <br />
                        Half the hassle, twice the fun.
                    </p>
                        <Link to="/board" title="Demo"><button>Run Demo</button></Link>

                    </div>
                    <div className="second-panel">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            </section>
        )
    }
}

const mapGlobalStateToProps = (state) => {
    return {
        boards: state.boardReducer.boards,
    };
};

const mapDispatchToProps = {
    loadBoards
}

export const Home = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_Home);
