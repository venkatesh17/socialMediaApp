import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './components/login'
import ProfileComponent from "./components/profile.js"
import './App.css';

function App() {
  return (
    <div>
      <div className="main"> 
      <Router>
       <Switch>
         <Route exact path="/login" component={LoginForm} />
         <Route path="/profile" component={ProfileComponent} />
       </Switch>
       </Router>  
      </div>
    </div>
  );
}

export default App;
