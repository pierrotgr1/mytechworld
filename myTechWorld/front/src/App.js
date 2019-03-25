import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row,
 } from 'reactstrap';

import './App.css';

import NavBar from './components/NavBar'
import JumbOtron from './components/Jumbotron'
import ProjectCard from './components/Project'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      viewOnlyLike: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var ctx = this;
    fetch('http://localhost:3000/projects')
    .then(function(response){
      return response.json();
    }).then(function(data){
      ctx.setState({projects: data});
    }).catch(function(error){
      console.error(error);
    });

  };

  handleClick(onlyLike) {
    this.setState({viewOnlyLike: onlyLike})
  }


  render() {

    const cards = this.state.projects.map((item, index) => {
      return (
        <ProjectCard key={index} item={item} displayOnlyLike={this.state.viewOnlyLike}/>
      )
    })

    return (
      <div>

        <NavBar handleClickParent={this.handleClick}/>

        <JumbOtron/>

        <Container>
          <Row>
            {cards}
          </Row>
        </Container>

      </div>
    );
  }
}

export default App;
