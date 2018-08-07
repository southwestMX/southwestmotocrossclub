import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">South West Motorcross Club</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {/* <NavItem eventKey={1} href="/Home">
              Home
            </NavItem> */}
            <NavItem eventKey={3} href="/RiderInfo">
              Rider Info
            </NavItem>
            <NavItem eventKey={4} href="/Committee">
              Committee
            </NavItem>
            <NavItem eventKey={2} href="/Sponsors">
              Sponsors
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
