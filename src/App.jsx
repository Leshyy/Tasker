import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AppHeader } from './cmps/AppHeader';
import { BoardApp } from './pages/BoardApp';


export function App() {
  return (
    <Router>
      <div className="App flex">
        <AppHeader />

        <main>
          <Switch>
            <Route path="" component={BoardApp} />
          </Switch>
        </main>

      </div>
    </Router>
  );
}
