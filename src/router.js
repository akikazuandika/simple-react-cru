import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Header from './pages/part/Header';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Footer from './pages/part/Footer';

function PrivateRoute({component : Component, ...rest}){
  { document.body.classList.add('skin-blue'); document.body.classList.remove('login-page')}
  return (
    <Route
      {...rest}
      render={props => 
        localStorage.getItem("username") !== null
          ? <div><Header/><Component {...props} /><Footer/></div>
          : <Redirect to="/login"/>
      }
    />
  )
}

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout"  component={Logout} />
            <PrivateRoute exact path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
    );
  }
}
