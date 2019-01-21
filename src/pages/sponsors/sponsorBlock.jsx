import React, { Component } from "react";
import { Link } from "react-router-dom";

class SponsorBlock extends Component {
  render() {
    var imageSrc = this.props.imageSrc;
    var linkTo = this.props.linkTo;
    var linkDisplayText = this.props.linkDisplayText;
    var imageAlt = linkDisplayText;

    return (
      <div className="col-sm-4">
        <div className="sponsor vertical-center">
          <img
            className="sponsor-image"
            border="0"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>

        <h2>
          <Link to={linkTo} rel="noopener noreferrer" target="_blank">
            {linkDisplayText}
          </Link>
        </h2>
      </div>
    );
  }
}

export default SponsorBlock;
