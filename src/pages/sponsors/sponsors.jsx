import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import SponsorBlock from "./sponsorBlock";

import MitoLogo from "../../images/Sponsors/2019/Mito.png";

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

            <SponsorBlock
              imageSrc="http://www.spiralgfx.com/image/catalog/spiral_assets/2018-website-logo.png"
              linkTo="//www.spiralgfx.com"
              linkDisplayText="Spiral GFX"
            />
          </div>

          <div className="row sponsor-row">
            <SponsorBlock
              imageSrc="http://www.rhinogoo.co.uk/wp-content/uploads/2016/04/rhino-goo-logo.png"
              linkTo="//www.rhinogoo.co.uk"
              linkDisplayText="Rhino Goo"
            />
            <SponsorBlock
              imageSrc="https://www.midwestracing.co.uk/wp-content/uploads/2016/04/midwest_racing_husqvarna_logo.png"
              linkTo="//www.midwestracing.co.uk"
              linkDisplayText="Midwest Racing"
            />

            <SponsorBlock
              imageSrc="http://planetmoto.co/wp-content/uploads/2018/08/cropped-FINAL-No-Tag.png"
              linkTo="//planetmoto.co"
              linkDisplayText="Planet Moto"
            />
          </div>

          <div className="row sponsor-row">
            <SponsorBlock
              imageSrc={MitoLogo}
              linkTo="//www.mito.uk.com"
              linkDisplayText="Mito UK"
            />

            <SponsorBlock
              imageSrc="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/26992350_2063321783883184_1642002184584418542_n.jpg?_nc_cat=109&_nc_ht=scontent-lhr3-1.xx&oh=599c222c3ba3eedd25a47a890940e210&oe=5CDD2A02"
              linkTo="//www.facebook.com/pages/category/Product-Service/L-A-Racing-Fuels-uk-Race-fuel-supplier-and-race-fuel-consultant-1628977477317619/"
              linkDisplayText="LA Racing Fuels"
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Sponsors;
