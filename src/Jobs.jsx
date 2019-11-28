import React, { Component } from "react";
import axios from "axios";

class HideText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textDisplay: false
      // text1: "text1"
      // text2: "text2"
    };
  }

  componentDidMount() {
    axios.get("./src/data/jobs.json").then(response => {
      this.setState({
        jobs: response.data
      });
    });
  }

  ToggleButton() {
    this.setState(currentState => ({
      textDisplay: !currentState.textDisplay,
      buttonText: !currentState.buttonText
    }));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.ToggleButton()}>
          {this.state.textDisplay ? "Experience" : "About me"}
        </button>
        {!this.state.textDisplay && this.props.text}
      </div>
    );
  }
}

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    axios.get("./src/data/jobs.json").then(response => {
      this.setState({
        jobs: response.data
      });
    });
  }

  render() {
    const jobs = this.state.jobs;
    let jobsList;

    if (jobs.length > 0) {
      jobsList = jobs.map(job => {
        return (
          <div key={job.id}>
            <p>Tell me about {job.name}</p>
            <HideText text={job.description} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            <h1 className="ui header">My Projects</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              quod ab doloremque eaque. Consequatur temporibus, quos enim, eaque
              nemo ad iusto sequi modi totam qui veniam? Ab asperiores inventore
              distinctio.
            </p>
          </div>
          <div className="column"></div>
        </div>
        <div className="ui stackable four column grid">{jobsList}</div>
        {/* <HideText text={jobs && jobs[0].description}/> */}
      </div>
    );
  }
}

export default Jobs;
