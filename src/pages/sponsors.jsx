import React from "react";
import SponsorBlock from "./sponsorBlock";

import Moto33Logo from "../images/moto33Logo.jpg";
import BornAndBreadLogo from "../images/bornAndBreadLogo.jpg";
import SwLeadLogo from "../images/swLeadLogo.jpg";
import AvlImage from "../images/avlImage.jpg";
import StickNStitchLogo from "../images/stickNStitchLogo.png";

export const Sponsors = () => (
  <div>
    <h1 className="my-md-4">Sponsors 2018</h1>

    <div className="row sponsor-row">
      <SponsorBlock
        imageSrc="http://www.treenmotors.co.uk/IMG_3241.JPG"
        linkTo="//www.treenmotors.co.uk"
        linkDisplayText="Treen Motors"
      />

      <SponsorBlock
        imageSrc="https://motoskinzfx.co.uk/includes/templates/jsweb/images/uploads/Motoskinz%20Red.jpg"
        linkTo="//www.motoskinzfx.co.uk"
        linkDisplayText="Moto Skinz Fx"
      />

      <SponsorBlock
        imageSrc={BornAndBreadLogo}
        linkTo="//en-gb.facebook.com/bornnbread4b"
        linkDisplayText="Born N Bread"
      />
    </div>

    <div className="row sponsor-row">
      <SponsorBlock
        imageSrc="//www.savsbarbers.co.uk/wp-content/themes/custom/img/savs-barbers.jpg"
        linkTo="//en-gb.facebook.com/bornnbread4b"
        linkDisplayText="Savs Traditional Barbers"
      />

      <SponsorBlock
        imageSrc="//lh5.ggpht.com/D6UBIqXZLqKvrY_g2iZlBQC10vMecwze9cynB-o6JPCcwehSi-TogPF7_eKHU5Tf12twLhOSiiEjW9n2ZRrNNI6R=s158"
        linkTo="//www.wheeldontwo.co.uk/"
        linkDisplayText="Wheeldon Offroad Centre"
      />

      <SponsorBlock
        imageSrc="//scontent-lhr3-1.cdninstagram.com/vp/eada6679b2ea141805b259129108e702/5B9C8441/t51.2885-19/s150x150/17265450_742087182633260_3122230727844823040_a.jpg"
        linkTo="//picbear.online/flatchatracewear"
        linkDisplayText="Flatchat Racewear"
      />
    </div>

    <div className="row sponsor-row">
      <SponsorBlock
        imageSrc={SwLeadLogo}
        linkTo="//swlead.co.uk/"
        linkDisplayText="SW Lead"
      />

      <SponsorBlock
        imageSrc="http://www.johndeaconracing.co.uk/content/images/thumbs/0000023.png"
        linkTo="//www.johndeaconracing.co.uk"
        linkDisplayText="SW Lead"
      />

      <SponsorBlock
        imageSrc="//www.mxcoach.co.uk/images/newsite_images/main01.jpg"
        linkTo="//www.mxcoach.co.uk"
        linkDisplayText="Rikki Priest MX Training Academy"
      />
    </div>

    <div className="row sponsor-row">
      <SponsorBlock
        imageSrc={AvlImage}
        linkTo="//www.facebook.com/Paul-Jenkins-All-Vehicle-Logistics-407148362719761"
        linkDisplayText="AVL Devon"
      />

      <SponsorBlock
        imageSrc="//www.stblazeymx.co.uk/wp-content/uploads/2014/12/st_blazey_mx.png"
        linkTo="//www.stblazeymx.co.uk/"
        linkDisplayText="St Blazey MX"
      />

      <SponsorBlock
        imageSrc="//cdn.shopify.com/s/files/1/1327/1707/t/73/assets/logo.png?17521352946626758784"
        linkTo="//www.dirtbikebitz.com"
        linkDisplayText="DirtBikeBitz"
      />
    </div>

    <div className="row sponsor-row">
      <SponsorBlock
        imageSrc={Moto33Logo}
        linkTo="//www.facebook.com/Moto-33-race-suspension-1580368355573044"
        linkDisplayText="Moto 33"
      />

      <SponsorBlock
        imageSrc="//scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14494775_930512270425611_3637543931775622985_n.jpg?_nc_cat=0&amp;oh=09894c52e3225ead43a4f3330ecabf36&amp;oe=5B87D098"
        linkTo="//www.swainsfamilycarcentre.co.uk"
        linkDisplayText="Swains"
      />

      <SponsorBlock
        imageSrc="//www.loftyscourierservice.co.uk/wp-content/uploads/2017/09/logo--e1506096433896.png"
        linkTo="//www.loftyscourierservice.co.uk"
        linkDisplayText="Loftys Courier"
      />
    </div>

    <div className="row sponsor-row">
      <SponsorBlock
        imageSrc={StickNStitchLogo}
        linkTo="//www.sticknstitchdesign.co.uk"
        linkDisplayText="Stick 'n' Stitch Design"
      />
    </div>
  </div>
);
