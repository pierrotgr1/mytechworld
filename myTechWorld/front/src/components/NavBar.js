import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
 } from 'reactstrap';

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.handleClickLikeOn = this.handleClickLikeOn.bind(this);
    this.handleClickLikeOff = this.handleClickLikeOff.bind(this);
  }

  handleClickLikeOn() {
    this.props.handleClickParent(true);
  }

  handleClickLikeOff() {
    this.props.handleClickParent(false);
  }

  render() {

    return(

    <div>
    <Navbar color="light" light expand="md" fixed="top">
      <NavbarBrand href="/" style={{color: "#EB5D57"}}>My Tech World</NavbarBrand>
      <Nav>
          <NavItem>
            <NavLink onClick={this.handleClickLikeOff} style={{color: "#63676b", cursor:'pointer'}}>The Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={this.handleClickLikeOn} style={{color: "#63676b", cursor:'pointer'}}>TOP 3</NavLink>
          </NavItem>
      </Nav>
    </Navbar>
    </div>

    )
  };
};
