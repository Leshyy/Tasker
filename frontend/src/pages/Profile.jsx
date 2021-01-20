import React, { Component } from 'react'
import { Person, Mail, Phone, Cake, Work } from '@material-ui/icons';

import Amit from '../assets/styles/img/Amit.jpeg'
import { AppHeader } from '../cmps/AppHeader'
import { userService } from '../services/userService';

export class Profile extends Component {
    state = {
        user: {},
        initials: ''
    }

    componentDidMount() {
        this.loadUser()
        this.getInitials('tak took')

    }

    loadUser = async () => {
        const { userId } = this.props.match.params
        const user = await userService.getById(userId)
        const initials = this.getInitials(user.fullname)
        this.setState({ user, initials })
    }

    getInitials = (fullname) => {
        const names = fullname.split(' ')
        const initials = names[0].charAt(0) + names[1].charAt(0)
        return initials.toUpperCase()
    }



    render() {
        const { user, initials } = this.state
        if (user === {}) return <div>Loading...</div>
        return (
            <React.Fragment>
                <AppHeader />
                <section className="profile flex col space-between">
                    <div className="profile-header flex col align-center">
                        <div>{initials}</div>
                        <h1>{user.fullname}</h1>
                    </div>

                    <div className="profile-main flex space-between">
                        <div className="first-panel ">
                            <h2>My Boards</h2>
                            <ul className="boards-list clean-list">
                                <li>from board ⇒ task name </li>
                                <li>from board ⇒ task name </li>
                                <li>from board ⇒ task name </li>
                            </ul>
                        </div>

                        <div className="second-panel ">
                            <h2>My Tasks</h2>
                            <ul className="tasks-list clean-list">
                                <li>from board ⇒ task name </li>
                                <li>from board ⇒ task name </li>
                                <li>from board ⇒ task name </li>
                            </ul>
                        </div>

                        <div className="third-panel">
                            <img src={user.imgUrl || Amit} alt="avatar" />
                            <ul className="clean-list">
                                <li><Person /><span>username:</span>{user.fullname}</li>
                                <li><Mail /><span>email:</span>{user.email}</li>
                                <li><Phone /><span>Phone:</span>{user.phoneNumber}</li>
                                <li><Cake /><span>Birthday:</span>{user.birthday}</li>
                                <li><Work /><span>Company:</span>{user.company} </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
