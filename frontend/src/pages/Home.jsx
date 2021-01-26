import logo from '../assets/styles/logo/logo.png'

import { Component } from 'react'
import { connect } from 'react-redux'
import { loadBoards } from '../store/actions/boardAction'
import { Link } from 'react-router-dom'

class _Home extends Component {

    state = {
        boards: null,
        isLoading: false,
    }

    componentDidMount() {
        this.setLoader();
    }

    setLoader = async () => {
        this.setState({ isLoading: true })
        setTimeout( async () => {
            this.setState({ isLoading: false })
            await this.props.loadBoards()
        }, 4000);
    }

    componentWillUnmount() {
        this.setState({ isLoading: false })
    }
    runDemo = () => {
        let loggedinUser = {
            isAdmin: false,
            fullname: "Guest Guestis",
            username: "Guest",
            email: "Guest@gmail.com",
            phoneNumber: "0524735510",
            birthday: "20/02/2000",
            company: "Mister Bit.",
        }
        sessionStorage.setItem('loggedinUser', JSON.stringify(loggedinUser))

    }
    render() {
        if (this.state.isLoading) return (
            <div className="loader-container flex center align-center">
                <video width="700" height="700" autoPlay loop preload="true">
                    <source src="loader.mp4" type="video/mp4"></source>
                </video>
            </div>
        )
        return (
            <section className="home flex col" >
                <div className="home-header flex start align-center">
                    <Link to="/login" title="Login">Login</Link>
                    <Link to="/" title="Sign-Up">Sign-Up</Link>
                </div>
                <div className="home-main flex">
                    <div className="first-panel flex col center align-start">
                        <h1>Join the future</h1>
                        <p>
                            The next step in multi-planning and productivity!
                         <br />
                            <span>Sheny</span> will help you keep track of hundreds of tasks.
                        <br />
                        An efficient way to manage your co-workers / employees.
                        <br />
                        Half the hassle, twice the fun.
                    </p>
                        <Link to="/board" title="Demo" onClick={this.runDemo}><button>Start Here!</button></Link>

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
