import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom';

import Root from "./components/Root";
import Home from "./components/Home/Home";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import './App.css';

const Tech = ({ match }) => {
  return <div>Current Route: {match.params.test}</div>
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Root}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/sign_in" component={SignIn}/>
          <Route exact path="/sign_up" component={SignUp}/>
        </div>
      </Router>
    );
  }
}

export default App;
