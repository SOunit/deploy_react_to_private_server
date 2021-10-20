import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import First from './pages/first';
import Second from './pages/second';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/first' exact>
          <First />
        </Route>
        <Route path='/second' exact>
          <Second />
        </Route>
        <Redirect path='*' to='/first' />
      </Switch>
    </div>
  );
}

export default App;
