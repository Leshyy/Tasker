import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
    NotificationsNone,
    AppsOutlined,
    PersonOutline,
    ExitToAppOutlined,
    EventNoteOutlined,
    GitHub,
    LinkedIn
} from '@material-ui/icons';

import logo from '../assets/styles/logo/logo.png'
import { NotificationModal } from './notification/NotificationModal';
import { socketService } from '../services/socketService';



export class AppHeader extends Component {
    state = {
        isNotificationModalShown: false,
        notifications: [],
        isNewNotification: false
    }

    async componentDidMount() {
        socketService.on('board add notification', (notification) => {
            const copyNotifications = [...this.state.notifications, notification]
            this.setState({ notifications: copyNotifications, isNewNotification: true })
        })
    }


    toggleShowModal = () => {
        this.setState({ isNotificationModalShown: !this.state.isNotificationModalShown, isNewNotification: false })
    }


    render() {
        const { isNotificationModalShown, notifications, isNewNotification } = this.state
        return (
            <div className="header-main flex">
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
                    </div>
                    <div className="header-left-bottom flex col space-around">
                        <Link className="header-item" to="/myweek" title="My week"><EventNoteOutlined /></Link>
                        <Link className="header-item" to="/profile" title="My profile"><PersonOutline /></Link>
                        <Link className="header-item" to="" title="Logout"><ExitToAppOutlined /></Link>
                    </div>
                </div>
                <div className="header-right-panel flex col">
                    <div className="header-right-top"></div>
                    <div className="header-right-middle flex col">
                        <GitHub className="header-item" />
                        <LinkedIn className="header-item" />
                    </div>
                    <div className="header-right-bottom"></div>
                </div>
            </div>
        )
    }
}