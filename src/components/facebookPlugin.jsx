import React, { Component } from "react";

class FacebookPlugin extends Component {
  constructor() {
    super();
    this.state = {
      width: 500
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.setWidth();

    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", null);
  }

  setWidth() {
    var width = this.divElement.clientWidth;
    if (width < 500) {
      width = width - 30;
    } else if (width > 500) {
      width = 500;
    }

    this.setState({ width });
  }

  handleResize(WindowSize, event) {
    this.setWidth();
  }

  render() {
    return (
      <div
        className="col-12"
        ref={divElement => (this.divElement = divElement)}
      >
        <iframe
          title={"facebook" + this.props.tabs}
          src={
            "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsouthwest.motocrossclub%2F&tabs=" +
            this.props.tabs +
            "&width=" +
            this.state.width +
            "&height=" +
            this.props.height +
            "&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=147961479317852"
          }
          width={this.state.width}
          height={this.props.height}
          scrolling="no"
          frameBorder="0"
          allow="encrypted-media"
        />
      </div>
    );
  }
}

export default FacebookPlugin;
