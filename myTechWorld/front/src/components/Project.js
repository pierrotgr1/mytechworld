import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Badge, Progress, CardFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ProjectCard extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      like: false,
      displayOnlyLike: false,
    }
  }

  handleClick() {
    this.setState({like: !this.state.like});
  }

  calcPercent(currentVal, maxVal) {
    return currentVal/maxVal*100;
  }

  render() {

    var display = null;
    if(this.props.displayOnlyLike && !this.state.like) {
      display = 'none'
    }

    return(

      <Col xs="12" sm="6" md="4" lg="4" style={{display}}>
        <div>
          <Card style={{marginTop: 25, marginBottom: 25}}>
            <CardImg top width="100%" src={this.props.item.pic_url} alt="Card image cap" style={{backgroundColor: "#EA5D56"}}/>
            <CardBody style={{height: '350px'}}>
              <CardTitle style={{textAlign: 'center', verticalAlign: 'center', fontWeight: 'bold'}}>{this.props.item.name}</CardTitle>
              <CardText style={{textAlign: 'center', verticalAlign: 'center'}}>{this.props.item.desc}</CardText>

              <CardSubtitle style={{textAlign: 'center', verticalAlign: 'center', fontWeight: 'bold'}}>Stack Front</CardSubtitle>
              {
                this.props.item.stack_front.map((item, index) => (<Badge key={index} color="secondary" style={{margin: '0 4px'}}>{item}</Badge>))
              }

              <CardSubtitle style={{textAlign: 'center', verticalAlign: 'center', fontWeight: 'bold', marginTop: 8}}>Stack Back</CardSubtitle>
              {
                this.props.item.stack_back.map((item, index) => (<Badge key={index} color="secondary" style={{margin: '0 4px'}}>{item}</Badge>))
              }

              <div className="text-center">{this.props.item.days_spent}/5 days spent</div>
              <Progress value={this.calcPercent(this.props.item.days_spent, 5)} color="secondary"/>

              <CardText style={{textAlign: 'center', verticalAlign: 'center'}}></CardText>


            </CardBody>
            <CardFooter>
              <Button outline={!this.state.like} style={{textAlign: 'center', verticalAlign: 'center'}} onClick={this.handleClick}>Favorites</Button>
            </CardFooter>
          </Card>
        </div>
      </Col>

    )
  }
}
