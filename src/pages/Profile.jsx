import Amit from '../assets/styles/img/Amit.jpeg'
<<<<<<< HEAD
import {Person , Mail} from '@material-ui/icons';
=======
import { Person, Mail } from '@material-ui/icons';
>>>>>>> bf9778bfa13bac105591e14acecaddd7cdfeca3d
export function Profile() {
    return (
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
<<<<<<< HEAD
                        <li><Person/><span>username:</span> Israel</li>
                        <li><Mail/><span>email:</span> Israel@gmail.com</li>
=======
                        <li><Person /><span>username:</span> Israel</li>
                        <li><Mail /><span>email:</span> Israel@gmail.com</li>
>>>>>>> bf9778bfa13bac105591e14acecaddd7cdfeca3d
                        <li><span>Phone:</span> 052-1102345</li>
                        <li><span>Birthday:</span> 01/01/79</li>
                        <li><span>Company:</span> Mister Bit.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
