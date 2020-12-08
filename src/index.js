import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Logout from './Logout'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Schedule from './Schedule';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
