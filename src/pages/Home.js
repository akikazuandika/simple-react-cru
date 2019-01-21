import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

  render() {
    return (
      <div>
          <div className="content-wrapper">
    <section className="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol className="breadcrumb">
        <li><Link to="#"><i className="fa fa-dashboard"></i> Home</Link></li>
        <li className="active">Dashboard</li>
      </ol>
    </section>

    <section className="content">
      <div className="row">
        <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-aqua">
            <div className="inner">
              <h3>150</h3>

              <p>New Orders</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag"></i>
            </div>
            <Link to="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></Link>
          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-green">
            <div className="inner">
              <h3>53<sup style={{fontSize: 20}}>%</sup></h3>

              <p>Bounce Rate</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <Link to="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></Link>
          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-yellow">
            <div className="inner">
              <h3>44</h3>

              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add"></i>
            </div>
            <Link to="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></Link>
          </div>
        </div>
        <div className="col-lg-3 col-xs-6">
          <div className="small-box bg-red">
            <div className="inner">
              <h3>65</h3>

              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph"></i>
            </div>
            <Link to="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></Link>
          </div>
        </div>
      </div>
    </section>
  </div>
      </div>
    );
  }
}

export default Home;
