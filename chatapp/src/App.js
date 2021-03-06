import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard';
import SingleChat from './components/SingleChat';
import MulitUserChat from './components/MultiUserChat';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/singleChat" component={SingleChat}/>
            <Route path="/multiuserchat" component={MulitUserChat}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
