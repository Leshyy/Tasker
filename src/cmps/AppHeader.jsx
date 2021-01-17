import { Link } from 'react-router-dom'
import logo from '../assets/styles/logo/logo.png'
import { NotificationsNone, AppsOutlined, CalendarTodayOutlined, PersonOutline, ExitToAppOutlined , EventNoteOutlined } from '@material-ui/icons';
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
                <Link to="/board" title="My Boards"><AppsOutlined /></Link>
                <Link to="/myweek" title="My week"><EventNoteOutlined /></Link>
                <Link to="/profile" title="My profile"><PersonOutline /></Link>
                <Link to="" title="Logout"><ExitToAppOutlined /></Link>
            </nav>
        </div>
    )
}
