import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username : "",
        password : ""
    };
  }

  passwordChangeHandler = (e) => {
    let password = e.target.value
    this.setState({password})
  }

  usernameChangeHandler = (e) => {
    let username = e.target.value
    this.setState({username})
  }

  loginHandler = (e) => {
    let {username, password } = this.state
    e.preventDefault()
    if (username === "akikazu" && password === "andika") {
        localStorage.setItem("username", username)
        alert("You're logged in")
        this.props.history.push("/")
    }else{
        alert("Password is wrong")
    }
  }

  render() {
    { document.body.classList.add('login-page'); document.body.classList.remove('skin-blue'); document.body.classList.remove('sidebar-mini'); }
    return (
        <div className="hold-transition login-page" >
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/" >
                        <b>Admin</b>LTE
                    </Link>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form method="post">
                        <div className="form-group has-feedback">
                            <input value={this.state.username} type="text" className="form-control" placeholder="Username" onChange={this.usernameChangeHandler}/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input value={this.state.password} type="password" className="form-control" placeholder="Password" onChange={this.passwordChangeHandler}/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck" >
                                    <Link to="/register" >
                                        Register a new membership
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button onClick={this.loginHandler} type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}
