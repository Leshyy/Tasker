import { Link } from 'react-router-dom'
import logo from '../assets/styles/logo/logo.png'

export function Home() {
    return (
        <section className="home flex col">
            <div className="home-header flex start align-center">
                <Link to="/board" title="My Boards">Boards</Link>
                <Link to="/" title="Login">Login</Link>
                <Link to="/" title="Sign-Up">Sign-Up</Link>
            </div>
            <div className="home-main flex">
                <div className="first-panel flex col center align-start">
                    <h1>Join the future</h1>
                    <p>
                        The next step in multi-planning and productivity!
                         <br />
                        <span>Tasker</span> will help you keep track of hundreds of tasks.
                        <br />
                        An efficient way to manage your co-workers / employees.
                        <br/>
                        Half the hassle, twice the fun.
                    </p>
                    <Link to="/board" title="My Boards"><button>Run Demo</button></Link>
                    
                </div>
                <div className="second-panel">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
        </section>
    )
}
