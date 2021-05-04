import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Notification from './pages/Notification';
import AddPost from './pages/AddPost'
import './App.css';
class App extends Component {
  render() {
    const App = () => (
      <div>
      
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/notification' component={Notification}/>
          <Route path='/add' component={AddPost}/>
        </Switch>
        
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;