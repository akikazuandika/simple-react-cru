import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      <header className="main-header">
        <Link to="/" className="logo">
          <span className="logo-mini"><b>A</b>LT</span>
          <span className="logo-lg"><b>Admin</b>LTE</span>
        </Link>
        <nav className="navbar navbar-static-top">
          <Link to="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </Link>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src="/template/dist/img/user2-160x160.jpg" className="user-image" alt={"User"}/>
                  <span className="hidden-xs">{localStorage.getItem("username").charAt(0).toUpperCase() + localStorage.getItem("username").slice(1)}</span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img src="/template/dist/img/user2-160x160.jpg" className="user-image" alt={"User"}/>
                  </li>
                  <li className="user-footer">
                    <div className="pull-right">
                      <Link to="/logout" className="btn btn-default btn-flat">Sign out</Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src="/template/dist/img/user2-160x160.jpg" className="img-circle" alt={"User"}/>
            </div>
            <div className="pull-left info">
              <p>{localStorage.getItem("username").charAt(0).toUpperCase() + localStorage.getItem("username").slice(1)}</p>
              <Link to="#"><i className="fa fa-circle text-success"></i> Online</Link>
            </div>
          </div>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active">
              <Link to="/">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa pull-right"></i>
                </span>
              </Link>
            </li>
            <li><Link to="/create"><i className="fa fa-plus"></i> <span>Create</span></Link></li>
            <li><Link to="/logout"><i className="fa fa-sign-out"></i> <span>Logout</span></Link></li>
          </ul>
        </section>
      </aside>
      </div>
    );
  }
}
