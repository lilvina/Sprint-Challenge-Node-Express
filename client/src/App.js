import React, { Component } from 'react';
//import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects() {
    axios.get('http://localhost:4000/api/project/')
    .then(res => {
      this.setState({
        projects: [...res.data]
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.projects.map(project => {
          return(
            <div className="page" key={project.id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <p>{project.actions}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
