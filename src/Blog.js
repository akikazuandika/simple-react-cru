import React, { Component } from 'react';

class Blog extends Component {

  constructor(props){
    super(props)
    this.state = {
      storage : ''
    }
  }

  onClickHandler = () => {
    const username = localStorage.getItem("username") ? localStorage.getItem("username") : false
    this.setState({storage : username})
  }

  renderItem = (element) => {
    return (
      <h1>{element}</h1>
    )
  }

  render() {
    return (
      <div>
        <h1>Blog Page</h1>
        <button onClick={this.onClickHandler} >Show Storage</button><br/>
        {this.state.storage}
      </div>
    );
  }
}

export default Blog;
