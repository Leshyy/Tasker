import { Profile } from './pages/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { BoardApp } from './pages/BoardApp';
import { Home } from './pages/Home';
import { MyWeek } from './pages/MyWeek';



export function App() {
  return (
    <Router>
      <div className="App flex">
        <main className="flex">
          <Switch>
            <Route path="/board" component={BoardApp} />
            <Route path="/myweek" component={MyWeek} />
            <Route path="/profile/:userId?" component={Profile} />
            <Route path="/" component={Home} />
          </Switch>
        </main>

      </div>
    </Router>
  );
}

