import React from "react";

const About = () => {
  return (
    <div className="ui main container">
      <div id="centered" className="ui middle aligned two column grid">
        <div className="row">
          <div className="column ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              className="about-image"
            />
          </div>
          <div className="column">
            <div className="about header">
              Martin<br></br> Strid
            </div>
            <div className="about content">Web Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
