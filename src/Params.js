import React, { Component } from 'react';

class Params extends Component {

  getInitialProps({match : id}){
        return {id}
  }

  render() {

    return (
      <div>
        <h1>Params Page</h1>
        { this.props.id }
      </div>
    );
  }
}

export default Params;
