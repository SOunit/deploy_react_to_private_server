import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import './App.css';
import First from './pages/first';
import Post from './pages/post';
import Second from './pages/second';

function App() {
  return (
    <div>
      <BrowserRouter basename={'/react'}>
        <Switch>
          <Route path='/first' exact>
            <First />
          </Route>
          <Route path='/second' exact>
            <Second />
          </Route>
          <Route path='/post' exact>
            <Post />
          </Route>
          <Redirect path='*' to='/first' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
