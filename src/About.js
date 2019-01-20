import React, { Component } from 'react';

class About extends Component {

  saveStorage = () => {
    localStorage.setItem("username", "andika")
    console.log(localStorage.getItem("username"));
  }

  deleteStorage = () => {
    localStorage.clear()
    console.log(localStorage.getItem("username"));
  }

  render() {
    return (
      <div>
        <h1>About Page</h1>
        <button onClick={this.saveStorage} >Save Storage</button>
        <button onClick={this.deleteStorage} >Delete Storage</button>
      </div>
    );
  }
}

export default About;
