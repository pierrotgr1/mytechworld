import React, { Component } from 'react';
import { Jumbotron, Button, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class JumbOtron extends Component {



  render() {

    const style = {
      backgroundImage: "url('https://res.cloudinary.com/da4pvqajx/image/upload/v1552322559/jumbotron.png')",
      color: 'white'
    }

    return(
        <Jumbotron style={style}>

            <h1 className="display-3" style={{textAlign: 'center', verticalAlign: 'center'}}>My Tech World</h1>


            <p className="lead" style={{textAlign: 'center', verticalAlign: 'center'}}>10 weeks to change my life</p>

            <p className="lead" style={{textAlign: 'center', verticalAlign: 'center'}}>8 fullstack projects to learn code</p>


            <p className="lead" style={{textAlign: 'center', verticalAlign: 'center'}}>
              <Button color="secondary">Discover my projects</Button>
            </p>

        </Jumbotron>
    )
  };
};
