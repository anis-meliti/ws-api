import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserList from './Components/UserList';
import PostsList from './Components/PostsList';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={UserList} />
          <Route exact path='/posts/:id' component={PostsList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
