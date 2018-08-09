import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { Switch, Route, Link } from "react-router-dom";
import NavLink from "./navLink";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { path: "/", text: "Home", isActive: true },
        { path: "/RiderInfo", text: "Rider Info", isActive: false },
        { path: "/Committee", text: "Committee", isActive: false },
        { path: "/Sponsors", text: "Sponsors", isActive: false }
      ]
    };
  }

  handleClick(i) {
    const links = this.state.links.slice();
    for (const j in links) {
      links[j].isActive = i === j;
    }
    this.setState({ links: links });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link className="navbar-brand" to="/Home">
            South West Motocross Club
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {this.state.links.map((link, i) => (
                <NavLink
                  path={link.path}
                  text={link.text}
                  isActive={link.isActive}
                  key={link.path}
                  onClick={() => this.handleClick(i)}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
