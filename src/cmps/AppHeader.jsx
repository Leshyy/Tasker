import { Link } from 'react-router-dom'
import logo from '../assets/styles/logo/logo.png'
import { NotificationsNone, FormatListBulletedOutlined, CalendarTodayOutlined, PersonOutline, ExitToAppOutlined } from '@material-ui/icons';
export function AppHeader() {
    return (
        <div className="main-header flex space-between">
            <div className="top-header flex ">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <span title="Notifications"><NotificationsNone /></span>
            </div>

            <nav className="nav-header flex space-around">
                <Link to="/board" title="My Boards"><FormatListBulletedOutlined /></Link>
                <Link to="/myweek" title="My week"><CalendarTodayOutlined /></Link>
                <Link to="/profile" title="My profile"><PersonOutline /></Link>
                <Link to="" title="Logout"><ExitToAppOutlined /></Link>
            </nav>
        </div>
    )
}
