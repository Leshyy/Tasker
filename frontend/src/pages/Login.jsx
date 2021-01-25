import { Component } from "react"
import { connect } from "react-redux"
import Input from '@material-ui/core/Input'
import { login, signup, logout } from "../store/actions/userAction"
import { userService } from "../services/userService"
import { Button } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FacebookIcon from '@material-ui/icons/Facebook'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'



class _Login extends Component {
    state = {
        isNewUser: false,
        msg: '',
        loggedinUser: userService.getLoggedinUser(),
        loginCred: {
            username: '',
            password: ''
        },
        signupCred: {
            username: '',
            password: '',
            fullname: ''
        }
    }


    componentDidMount() {
    }

    loginHandleChange = (ev) => {
        const { name, value } = ev.target
        this.setState(prevState => ({
            loginCred: {
                ...prevState.loginCred,
                [name]: value
            }
        }))
    }

    signupHandleChange = ev => {
        const { name, value } = ev.target
        this.setState(prevState => ({
            signupCred: {
                ...prevState.signupCred,
                [name]: value
            }
        }))
    }

    doLogin = async ev => {
        ev.preventDefault()
        const { username, password } = this.state.loginCred
        if (!username || !password) {
            return this.setState({ msg: 'Please enter user/password' })
        }
        try {
            const userCreds = { username, password }
            const user = await this.props.login(userCreds)
            if (user) {
                this.setState({ loginCred: { username: '', password: '' } })
                this.props.history.push('/board')

            }
        } catch (err) {
            this.setState({ msg: 'Login failed, try again.' })
        }
    }

    doSignup = async ev => {
        ev.preventDefault()
        const { username, password, fullname } = this.state.signupCred
        if (!username || !password || !fullname) {
            return this.setState({ msg: 'All inputs are required' })
        }
        const signupCreds = { username, password, fullname }
        try {
            this.props.signup(signupCreds)
            this.setState({ signupCred: { username: '', password: '', fullname: '' } })
            this.props.history.push('/board')
        } catch {
            this.setState({ msg: 'signup failed, try again.' })

        }
    }

    newUser = (ev) => {
        ev.preventDefault()
        const lastAns = this.state.isNewUser
        this.setState({ isNewUser: !lastAns })
    }

    render() {
        // const loggedInUser = userService.getLoggedinUser()
        let loginSection = (
            <form className="login flex col" onSubmit={this.doLogin}>
                <h2>Login</h2>
                <Input
                    type="text"
                    name="username"
                    autoComplete="off"
                    value={this.state.loginCred.username}
                    onChange={this.loginHandleChange}
                    placeholder="Username"
                />
                <Input
                    id="standard-adornment-password"
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={this.state.loginCred.password}
                    onChange={this.loginHandleChange}
                    placeholder="Password"
                />
                <button variant="contained" color="primary">Login</button>
                <a href="\login" onClick={this.newUser}>Dont have a user? signup</a>
                <Button color="primary"><FacebookIcon className="face-icon" />Login with Facebook</Button>

            </form>
        )
        let signupSection = (
            <form className="signup flex col" onSubmit={this.doSignup}>
                <h2>Signup</h2>
                <Input
                    type="text"
                    name="username"
                    autoComplete="off"
                    onChange={this.signupHandleChange}
                    placeholder="Username*"
                />
                <Input
                    name="password"
                    type="password"
                    autoComplete="off"
                    onChange={this.signupHandleChange}
                    placeholder="Password*"
                />
                <Input
                    type="text"
                    name="fullname"
                    autoComplete="off"
                    onChange={this.signupHandleChange}
                    placeholder="Full name*"
                />
                <Input
                    type="text"
                    name="email"
                    autoComplete="off"
                    onChange={this.signupHandleChange}
                    placeholder="Email*"
                />
                <button variant="contained">Signup</button>
                <a href="" onClick={this.newUser}> have a user? login</a>

            </form>
        )
        const { isNewUser } = this.state
        const { logout, loggedinUser } = this.props;
        return (
            <div className="login-page">
                <Link className="arrow-left" data-title={'Back to Home'} to="/"><ArrowBackIcon /></Link>
                <section className="login-container">
                    <AccountCircleIcon />
                    <p>{this.state.msg}</p>
                    {loggedinUser && (
                        <div>
                            <h3>
                                Are you sure you want to exit? {loggedinUser.fullname}
                                <button onClick={logout}>Logout</button>
                            </h3>
                        </div>
                    )}

                    {!loggedinUser && !isNewUser && loginSection}
                    {!loggedinUser && isNewUser && signupSection}


                </section>
            </div >
        )
    }
}
const mapGlobalStateToProps = (state) => {
    return {
        loggedinUser: state.userReducer.loggedInUser
    }
}
const mapDispatchToProps = {
    login,
    signup,
    logout
}

export const Login = connect(mapGlobalStateToProps, mapDispatchToProps)(_Login)