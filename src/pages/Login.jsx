import { Component } from "react"
import Input from '@material-ui/core/Input'
// import { connect } from "socket.io-client"
// import { loginUser, logoutUser } from "../store/actions/userAction"
import { userService } from "../services/userService"
import { Button } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FacebookIcon from '@material-ui/icons/Facebook'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export class Login extends Component {
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
        console.log('this.state is:', this.state.loggedinUser)
    }

    loginHandleChange = (ev) => {
        const { name, value } = ev.target
        console.log('name,value is:', name, value);
        this.setState(prevState => ({
            loginCred: {
                ...prevState.loginCred,
                [name]: value
            }
        }))
    }
    doLogin = async ev => {
        ev.preventDefault()
        const { username, password } = this.state.loginCred
        console.log('username,password is:', username, password);
        if (!username || !password) {
            return this.setState({ msg: 'Please enter user/password' })
        }
        const userCreds = { username, password }
        try {
            const user = await userService.login(userCreds)
            this.props.loginUser(user)
            this.props.history.push('/toy')
        }
        catch (err) {
            console.log('ERR', err)
            this.setState({ msg: 'Try again' })
        }
    }
    newUser = (ev) => {
        ev.preventDefault()
        const lastAns = this.state.isNewUser
        this.setState({ isNewUser: !lastAns })
    }
    render() {
        const loggedInUser = userService.getLoggedinUser()

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
                <Button variant="contained" color="primary">Login</Button>
                <a href="" onClick={this.newUser}>Dont have a user? signup</a>
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
                <Button variant="contained">Signup</Button>
                <a href="" onClick={this.newUser}> have a user? login</a>

            </form>
        )
        const { loggedinUser, isNewUser } = this.state
        return (
            <div className="login-page">
                <Link className="arrow-left" data-title={'Back to Home'} to="/"><ArrowBackIcon /></Link>
                <section className="login-container">
                    <AccountCircleIcon />
                    <p>{this.state.msg}</p>
                    {!loggedinUser && (
                        <div>
                            <h3>
                                Are you sure you want to exit? {loggedinUser}
                                <button onClick={this.doLogout}>Logout</button>
                            </h3>
                        </div>
                    )}

                    {loggedinUser && !isNewUser && loginSection}
                    {loggedinUser && isNewUser && signupSection}


                </section>
            </div >
        )
    }
}
// const mapGlobalStateToProps = (state) => {
//     return {
//         // loggedinUser: state.userReducer.loggedInUser
//     }
// }
// const mapDispatchToProps = {
//     // loginUser,
//     // logoutUser,
//     // getLoggedinUser
// }

// export const Login = connect(
//     mapGlobalStateToProps,
//     mapDispatchToProps)(_Login)