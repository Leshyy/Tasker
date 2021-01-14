import Amit from '../assets/styles/img/Amit.jpeg'
import { Person, Mail, Phone, Cake, Work } from '@material-ui/icons';
import React from 'react'
import { AppHeader } from '../cmps/AppHeader'
export function Profile() {
    return (
        <React.Fragment>
            <AppHeader />
            <section className="profile flex col space-between">
                <div className="profile-header flex col align-center">
                    <div>AW</div>
                    <h1>Amit Weiss</h1>
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
                        <img src={Amit} alt="avatar" />
                        <ul className="clean-list">
                            <li><Person /><span>username:</span> Israel</li>
                            <li><Mail /><span>email:</span> Israel@gmail.com</li>
                            <li><Phone /><span>Phone:</span> 052-1102345</li>
                            <li><Cake /><span>Birthday:</span> 01/01/79</li>
                            <li><Work /><span>Company:</span> Mister Bit.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
