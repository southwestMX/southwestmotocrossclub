import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import SponsorBlock from "./sponsorBlock";

class Sponsors extends Component {
  render() {
    return (
      <DocumentTitle title="Sponsors 2019 | SWMX">
        <div>
          <h1 className="my-md-4">Sponsors 2019</h1>

          <div className="row sponsor-row">
            <SponsorBlock
              imageSrc="http://www.lucasoil.co.uk/images/ws-logo_shield_text.png"
              linkTo="//www.lucasoil.co.uk"
              linkDisplayText="Lucus Oil"
            />

            <SponsorBlock
              imageSrc="https://www.progrip.com/k-content/progrip/themes/progrip/html/img/logo.png"
              linkTo="//www.progrip.com"
              linkDisplayText="ProGrip"
            />
            {/*
            <SponsorBlock
              imageSrc={BornAndBreadLogo}
              linkTo="//en-gb.facebook.com/bornnbread4b"
              linkDisplayText="Born N Bread"
            /> */}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Sponsors;
