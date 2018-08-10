import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavLink from "./navLink";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { to: "/", text: "Home" },
        { to: "/RiderInfo", text: "Rider Info" },
        { to: "/Committee", text: "Committee" },
        { to: "/Sponsors", text: "Sponsors" }
      ]
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
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
              {this.state.links.map(link => (
                <NavLink to={link.to} text={link.text} key={link.to} />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
