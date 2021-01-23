import logo from '../assets/styles/logo/logo.png'

import { Component } from 'react'
import { connect } from 'react-redux'
import { loadBoards } from '../store/actions/boardAction'
import { Link } from 'react-router-dom'

class _Home extends Component {

    state = {
        boards: null,
        isLoading: false
    }

    componentDidMount() {
        this.setLoader();
        // this.props.history.push(`/board/${this.props.boards[0]._id}`)
    }

    setLoader = async () => {
        this.setState({ isLoading: true })
        setTimeout(async () => {
            this.setState({ isLoading: false })
            await this.props.loadBoards()
        }, 3000);
    }

    componentWillUnmount() {
        this.setState({ isLoading: false })
    }

    render() {
        if (this.state.isLoading) return (
            <div className="loader-container flex center align-center">
                <img src="loader.gif" alt="" />
            </div>
        )
        return (
            <section className="home flex col" >
                <div className="home-header flex start align-center">
                    {/* <Link to={`/board/${boards[0]._id}`} title="My Boards">Boards</Link> */}
                    {/* <Link to="/board" title="My Boards">Boards</Link> */}
                    <Link to="/login" title="Login">Login</Link>
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
                        <Link to="/board" title="Demo" onClick={this.setLoader}><button>Run Demo</button></Link>

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
