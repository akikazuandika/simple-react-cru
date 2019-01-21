import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <footer className="main-footer">
            <div className="pull-right hidden-xs">
                <b>Version</b> 2.4.0
            </div>
            <strong>Copyright &copy; 2014-2016 <Link to="https://adminlte.io">Almsaeed Studio.</Link></strong> All rights
            reserved.
        </footer>
    );
  }
}
