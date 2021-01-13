import { Link } from 'react-router-dom'
import logo from '../assets/styles/logo/logo.png'
export function AppHeader() {
    return (
        <div className="main-header flex space-between">
            <div className="top-header flex ">
                <img src={logo} alt="Logo" />
                <span title="Noti">Noti</span>
            </div>

            <nav className="nav-header flex space-around">
                <Link title="My week">My week</Link>
                <Link title="My profile">P</Link>
                <Link title="Logout">Logout</Link>
            </nav>
        </div>
    )
}