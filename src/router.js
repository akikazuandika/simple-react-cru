import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';
import Header from './pages/Header';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Footer from './pages/Footer';

function PrivateRoute({component : Component, ...rest}){
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
    { document.body.classList.add('skin-blue'); document.body.classList.remove('login-page')}
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
