import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/userAction'
import { Avatar } from '@material-ui/core';

import {
    NotificationsNone,
    AppsOutlined,
    ExitToAppOutlined,
    EventNoteOutlined,
    GitHub,
    LinkedIn
} from '@material-ui/icons';
import { NotificationModal } from './notification/NotificationModal';
import logo from "../assets/styles/logo/logo.png";
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { socketService } from '../services/socketService';


class _AppHeader extends Component {
    state = {
        isNotificationModalShown: false,
        notifications: [],
        isNewNotification: false,
        isHamburgerOpen: false
    }

    async componentDidMount() {
        socketService.on('board add notification', (notification) => {
            const copyNotifications = [...this.state.notifications, notification]
            this.setState({ notifications: copyNotifications, isNewNotification: true })
        })
    }

    componentWillUnmount() {
        socketService.off('board add notification')
    }



    toggleShowModal = () => {
        this.setState({ isNotificationModalShown: !this.state.isNotificationModalShown, isNewNotification: false })
    }

    toggleHamburger = () => {
        var { isHamburgerOpen } = this.state
        this.setState({ isHamburgerOpen: !isHamburgerOpen })
    }


    render() {
        const { isNotificationModalShown, notifications, isNewNotification, isHamburgerOpen } = this.state
        const { logout, loggedInUser } = this.props
        return (
            <div className="header-main flex">
                <div className="tab-name">Hi,{loggedInUser.fullname || 'Guest'}</div>
                <div className="header-left-panel flex col">
                    <div className="header-left-logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="header-left-top flex col">
                        <Link className="header-item" to="/board" title="My Boards"><AppsOutlined /></Link>
                        <span title="Notifications" className="notifications header-item" onClick={this.toggleShowModal}>
                            <NotificationsNone />
                            {isNewNotification && <div className="new-notification"></div>}

                            {isNotificationModalShown &&
                                <NotificationModal notifications={notifications} />}
                        </span>
                        {isNotificationModalShown && <div onClick={this.toggleShowModal} className="screen"></div>}
                    </div>
                    <div
                        className={`header-left-bottom flex col end ${!isHamburgerOpen && 'open'}`}>
                        <span className="event-note header-item flex align-center"><Link to="/myweek" title="My week"><EventNoteOutlined /></Link></span>
                        <span className="person header-item flex align-center">
                            <Link to="/profile" title="My profile">
                                <Avatar
                                    className="avatar"
                                    alt={`${loggedInUser.fullname || 'G'} `}
                                    src={loggedInUser.imgUrl || 'G'}
                                />
                            </Link>
                        </span>
                        <span className="exit-to-app header-item flex align-center"><Link to="" onClick={logout} title="Logout"><ExitToAppOutlined /></Link></span>
                    </div>
                </div>
                <div className="header-right-panel flex col">
                    <div className="header-right-top"></div>
                    <div className="header-right-middle flex col align-center">
                        <GitHub className="header-item" />
                        <LinkedIn className="header-item" />
                    </div>
                    <div className="header-right-bottom"></div>
                </div>
                <button className="hamburger" onClick={this.toggleHamburger}><MenuOutlinedIcon className="hamburger" /></button>
                {isHamburgerOpen &&
                    <div className="dark-screen-nover" onClick={this.toggleHamburger}></div>}
            </div>
        )
    }
}
const mapGlobalStateToProps = (state) => {
    return {
        loggedInUser: state.userReducer.loggedInUser
    };
};
const mapDispatchToProps = {
    logout,


}

export const AppHeader = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_AppHeader);
