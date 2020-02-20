import React from "react";
import { connect } from "react-redux";

const Header = props => {
  return (
    <nav className="ui secondary menu">
      <div className="ui container">
        <button
          className="ui item"
          onClick={() => props.setActivities("Hello")}
        >
          PORTFOLIO
        </button>
        <div className="right menu">
          <button
            id="cv-link"
            className="ui item"
            onClick={() => props.setActivities("CV")}
          >
            CV
          </button>
          <button
            id="projects-link"
            className="ui item"
            onClick={() => props.setActivities("Projects")}
          >
            PROJECTS
          </button>
          <button
            id="contact-link"
            className="ui item"
            onClick={() => props.setActivities("Contact")}
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setActivities: data => {
      dispatch({ type: "SET_CURRENTVIEW", payload: data });
    }
  };
};

export default connect(null, mapDispatchToProps)(Header);
