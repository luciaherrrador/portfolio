import React, { Component, Fragment } from "react";
import photoMe from "../images/me.jpg";

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div className="heroTextContainer">
          <h1 className="fontPreTitle preTitleEffect">
            Front-End Developer
          </h1>
          <h2 className="fontTitle typewriter">Lucía Herrador.</h2>
          <img
            className="photoMe"
            src={photoMe}
            alt="Lucía Herrador, Junior FrontEnd Developer"
          />
        </div>
      </Fragment>
    );
  }
}

export default Hero;
