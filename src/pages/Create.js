import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Create extends Component {  

  constructor(props){
    super(props)
    this.state = {
      title : "",
      body : ""
    }
  }

  titleChangeHandler = (e) => {
    this.setState({ title : e.target.value })
  }

  bodyChangeHandler = (e) => {
    this.setState({ body : e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => alert("Success add post."))
    .catch(err => err.json())
    .catch(err => console.log(err))
  }
  
  

  render() {
    return (
      <div>
        <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Create new resource
          </h1>
          <ol className="breadcrumb">
            <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
            <li className="active">Create</li>
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
