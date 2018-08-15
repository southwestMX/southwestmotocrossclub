import React, { Component } from "react";
import { Link } from "react-router-dom";

class SpeedHiveLink extends Component {
  render() {
    return (
      <Link
        className={"btn btn-info speedhive-btn " + this.props.className}
        to={"//speedhive.mylaps.com/Events/" + this.props.eventId}
        rel="noopener noreferrer"
        target="_blank"
      >
        {this.props.displayText == null
          ? "Race Results"
          : this.props.displayText}
      </Link>
    );
  }
}

export default SpeedHiveLink;
