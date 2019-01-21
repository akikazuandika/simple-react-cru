import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Update extends Component {  

  constructor(props){
    super(props)
    this.state = {
      title : "",
      body : "",
      post : {},
      id : this.props.match.params.id
    }
  }

  titleChangeHandler = (e) => {
    this.setState({ title : e.target.value })
  }

  bodyChangeHandler = (e) => {
    this.setState({ body : e.target.value })
  }

  componentDidMount = () => {
    let url = 'https://jsonplaceholder.typicode.com/posts/' + this.state.id
    fetch(url)
    .then(response => response.json())
    .then(post => this.setState({title : post.title, body : post.body}))
  }
  
  submitHandler = (e) => {
    e.preventDefault()
    let url = 'https://jsonplaceholder.typicode.com/posts/' + this.state.id
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            id: this.state.id,
            title: this.state.title,
            body: this.state.body,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => alert("Success update post."))
    .catch(err => console.log(err))
  }
  
  

  render() {
    {document.title="Update Post"}
    return (
      <div>
        <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Update resource
          </h1>
          <ol className="breadcrumb">
            <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
            <li className="active">Update</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="box box-primary">
                <form>
                  <div className="box-body">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input type="text" className="form-control" id="title" placeholder="Enter post title" onChange={this.titleChangeHandler} value={this.state.title}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="body">Content</label>
                      <input type="text" className="form-control" id="body" placeholder="Enter post content" onChange={this.bodyChangeHandler} value={this.state.body}/>
                    </div>
                    <button onClick={this.submitHandler} type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
