import React from "react";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import CV from "./CV";
import Projects from "./Projects";
import Contact from "./Contact";
import { connect } from "react-redux";

const Dashboard = props => {
  let currentView;

  switch (true) {
    case props.currentView === "Hello":
      currentView = <Hello />;
      break;
    case props.currentView === "Projects":
      currentView = <Projects />;
      break;
    case props.currentView === "CV":
      currentView = <CV />;
      break;
    case props.currentView === "Contact":
      currentView = <Contact />;
      break;
    default:
      currentView = <Hello />;
  }

  return (
    <div>
      <Header />
      {currentView}
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentView: state.currentView
  };
};

export default connect(mapStateToProps)(Dashboard);
