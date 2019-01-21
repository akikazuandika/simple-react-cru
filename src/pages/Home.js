import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       posts : []
    }
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({posts}))
  }
  
  render() {
    {document.title="Dashboard"}
    return (
      <div>
          <div className="content-wrapper">
            <section className="content-header">
              <h1>
                Dashboard
              </h1>
              <ol className="breadcrumb">
                <li><a href="/"><i className="fa fa-dashboard"></i> Dashboard</a></li>
              </ol>
            </section>
            <section className="content">
              <div className="row">
                <div className="col-xs-12">
                  <div className="box">
                    <div className="box-header">
                      <h3 className="box-title">Responsive Hover Table</h3>
                    </div>
                    <div className="box-body table-responsive no-padding">
                      <table className="table table-hover">
                        <thead>
                        <tr>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Post</th>
                          <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.state.posts.map((item) => {
                          return (
                            <tr>
                              <td>{item.id}</td>
                              <td>{item.title}</td>
                              <td>{item.body}</td>
                              <td>
                                <Link to={"/detail/" + item.id} ><a>Detail</a></Link>
                                <span> || </span>
                                <Link to={"/update/" + item.id} ><a>Update</a></Link>
                              </td>
                            </tr>
                          )
                        }) }
                        
                        </tbody>
                      </table>
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
