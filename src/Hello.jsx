import React from "react";
import { connect } from "react-redux";

const Hello = props => {
  return (
    <div className="ui main container">
      <div id="centered" className="ui middle aligned grid">
        <div className="row">
          <div className="column">
            <div className="header">
              <h1 className="hello-header">Hey,</h1>
              <div className="hello-content">
                I'm Martin Strid
                <br />
                <br />
                Junior Web Developer
              </div>

              <a
                className="ui right labeled large icon basic button"
                onClick={() => props.setActivities("Projects")}
              >
                PROJECTS
                <i className="angle double right icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setActivities: data => {
      dispatch({ type: "SET_CURRENTVIEW", payload: data });
    }
  };
};

export default connect(null, mapDispatchToProps)(Hello);
