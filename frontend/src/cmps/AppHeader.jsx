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


export class _AppHeader extends Component {
    state = {
        isNotificationModalShown: false
    }

    toggleShowModal = () => {
        this.setState({ isNotificationModalShown: !this.state.isNotificationModalShown })
    }


    render() {
        const { isNotificationModalShown } = this.state
        const { loggedInUser } = this.props
        console.log('user', loggedInUser);
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

                            {isNotificationModalShown &&
                                <NotificationModal notifications={loggedInUser.notifications} />}
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

const mapGlobalStateToProps = (state) => {
    return {
        loggedInUser: state.userReducer.loggedInUser,
    };
};
const mapDispatchToProps = {
}

export const AppHeader = connect(
    mapGlobalStateToProps,
    mapDispatchToProps
)(_AppHeader);