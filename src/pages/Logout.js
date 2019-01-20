import React, { Component } from 'react';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    localStorage.clear()
    this.props.history.push("/login")
    return (
        <div>
            If you're not redirected <a onClick={this.props.history.push("/login")} >click here</a>
        </div>
    )
  }
}
