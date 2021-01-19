import { Link } from 'react-router-dom'
import logo from '../assets/styles/logo/logo.png'
import {
    NotificationsNone,
    AppsOutlined,
    PersonOutline,
    ExitToAppOutlined,
    EventNoteOutlined,
    GitHub,
    LinkedIn
} from '@material-ui/icons';
import { Component } from 'react';
import { NotificationModal } from './NotificationModal';


export class AppHeader extends Component {
    state = {
        isNotificationModalShown: false
    }

    toggleShowModal = () => {
        this.setState({ isNotificationModalShown: !this.state.isNotificationModalShown })
    }


    render() {
        const { isNotificationModalShown } = this.state
        return (
            <div className="header-main flex">
                <div className="header-left-panel flex col">
                    <div className="header-left-logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="header-left-top flex col">
                        <span><Link to="/board" title="My Boards"><AppsOutlined /></Link></span>
                        <span title="Notifications" className="notifications" onClick={this.toggleShowModal}>
                            <NotificationsNone />
                            {isNotificationModalShown &&
                                <NotificationModal />}
                        </span>
                    </div>
                    <div className="header-left-bottom flex col space-around">
                        <span><Link to="/myweek" title="My week"><EventNoteOutlined /></Link></span>
                        <span><Link to="/profile" title="My profile"><PersonOutline /></Link></span>
                        <span><Link to="" title="Logout"><ExitToAppOutlined /></Link></span>
                    </div>
                </div>
                <div className="header-right-panel flex col">
                    <div className="header-right-top"></div>
                    <div className="header-right-middle flex col">
                        <span><GitHub /></span>
                        <span><LinkedIn /></span>
                    </div>
                    <div className="header-right-bottom"></div>
                </div>
            </div>
        )
    }
}
// export function AppHeader() {
//     return (
//         <div className="main-header flex space-between">
//             <div className="top-header flex ">
//                 <Link to="/">
//                     <img src={logo} alt="Logo" />
//                 </Link>
//                 <span title="Notifications"><NotificationsNone /></span>
//             </div>

//             <nav className="nav-header flex space-around">
//                 <Link to="/board" title="My Boards"><AppsOutlined /></Link>
//                 <Link to="/myweek" title="My week"><EventNoteOutlined /></Link>
//                 <Link to="/profile" title="My profile"><PersonOutline /></Link>
//                 <Link to="" title="Logout"><ExitToAppOutlined /></Link>
//             </nav>
//         </div>
//     )
// }
