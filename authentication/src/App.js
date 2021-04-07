import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/Signup";

import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>
      <div className="App">
        
          <NavBar/>
          
          <div className="outer">
            <div className="inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
              </Switch>
            </div>
          </div>
          
      </div>
    </Router>
  );
}

export default App;