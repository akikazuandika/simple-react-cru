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
                  <span className="hidden-xs">Alexander Pierce</span>
                </Link>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <img src="/template/dist/img/user2-160x160.jpg" className="user-image" alt={"User"}/>

                    <p>
                      Alexander Pierce - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  <li className="user-body">
                    <div className="row">
                      <div className="col-xs-4 text-center">
                        <Link to="#">Followers</Link>
                      </div>
                      <div className="col-xs-4 text-center">
                        <Link to="#">Sales</Link>
                      </div>
                      <div className="col-xs-4 text-center">
                        <Link to="#">Friends</Link>
                      </div>
                    </div>
                  </li>
                  <li className="user-footer">
                    <div className="pull-left">
                      <Link to="#" className="btn btn-default btn-flat">Profile</Link>
                    </div>
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
              <p>Alexander Pierce</p>
              <Link to="#"><i className="fa fa-circle text-success"></i> Online</Link>
            </div>
          </div>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview">
              <Link to="#">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa pull-right"></i>
                </span>
              </Link>
            </li>
            <li><Link to="/create"><i className="fa fa-dashboard"></i> <span>Create</span></Link></li>
            <li><Link to="#"><i className="fa fa-dashboard"></i> <span>Warning</span></Link></li>
            <li><Link to="/logout"><i className="fa fa-sign-out"></i> <span>Logout</span></Link></li>
          </ul>
        </section>
      </aside>
      </div>
    );
  }
}
