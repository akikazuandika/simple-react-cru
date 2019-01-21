import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      id : this.props.match.params.id
    }
  }

  componentDidMount = () => {
    let url = 'https://jsonplaceholder.typicode.com/posts/' + this.state.id
    fetch(url)
    .then(response => response.json())
    .then(post => this.setState({title : post.title, body : post.body}))
  }
  
  render() {
    {document.title="Dashboard"}
    return (
      <div>
          <div className="content-wrapper">
            <section className="content-header">
              <h1>
                Detail {this.state.title}
              </h1>
              <ol className="breadcrumb">
                <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
                <li className="active">Detail</li>
              </ol>
            </section>
            <section className="content">
              <div className="row">
                <div className="col-xs-12">
                  <div className="box box-primary">
                    <div className="box-body table-responsive no-padding">
                      <div className="col-md-12">
                        <h4>Title : {this.state.title}</h4>
                        <br/>
                        <h4>Body : {this.state.body}</h4>
                      </div>
                    </div>
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
