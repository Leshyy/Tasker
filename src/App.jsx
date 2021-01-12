import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AppHeader } from './components/AppHeader';


export function App() {
  return (
    <Router>
      <div className="App flex">
        <AppHeader />

        <main>
          <Switch>

          </Switch>
        </main>

      </div>
    </Router>
  );
}

