import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { BoardApp } from './pages/BoardApp';
import { Home } from './pages/Home';
import { MyWeek } from './pages/MyWeek';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { socketService } from './services/socketService';

socketService.setup()

export function App() {
  return (
    <Router>
      <div className="App flex">
        <main className="flex">
          <Switch>
            <Route path="/board" component={BoardApp} />
            <Route path="/myweek" component={MyWeek} />
            <Route path="/profile/:userId?" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </main>

      </div>
    </Router>
  );
}

