import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class NavLink extends Component {
  render() {
    var isActive =
      this.context.router.route.location.pathname === this.props.to;
    var className = isActive ? " active" : "";

    return (
      <li className={"nav-item" + className}>
        <Link className="nav-link" to={this.props.to}>
          {this.props.text}
        </Link>
      </li>
    );
  }
}

NavLink.contextTypes = {
  router: PropTypes.object
};

export default NavLink;
