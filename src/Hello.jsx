import React from "react";

const Hello = () => {
  return (
    <div className="ui main container">
      <div id="centered" className="ui middle aligned grid">
        <div className="row">
          <div className="column">
            <div className="header">
              <h1 className="hello-header">Hi!</h1>
              <div className="hello-content">I'm Martin Strid</div>

              <a
                className="ui right labeled large icon basic button"
                href="/projects"
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

export default Hello;
