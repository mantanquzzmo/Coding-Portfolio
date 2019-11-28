import React, { Component } from "react";
import axios from "axios";

class HideText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textDisplay: false,
      text: true
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
      buttonText: !currentState.text
    }));
  }

  divRender() {
    return <h4>testdiv</h4>;
  }

  divRender2() {
    return <h1>testdiv2</h1>;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.ToggleButton()}>
          {this.state.textDisplay ? "Experience" : "About me"}
        </button>
        {this.state.textDisplay ? <h4>This is my extensive experience</h4> : <h4>This is however what I do in my spare time</h4>}
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
    jobsList = <div>
    <p>Tell me about</p>
    <HideText text="test" />
  </div>
    if (jobs.length > 0) {
      jobsList = jobs.map(job => {
        return (
          <div>
            <p>Tell me about</p>
            <HideText text="test" />
          </div>
        );
      });
    }

    return (
        <div class="ui grid"><div>{jobsList}</div></div>
        
    );
  }
}

export default Jobs;
