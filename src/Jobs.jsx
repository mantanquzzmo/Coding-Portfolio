import React, { Component } from "react";
import axios from "axios";

class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      currentContent: null
    };
  }

  componentDidMount() {
    axios.get("./src/data/jobs.json").then(response => {
      this.setState({
        jobs: response.data
      });
    });
  }

  presentExperiences() {
    return (
      <div>
        <p>LOOK AT ALL MY EXPERIENCE</p>
      </div>
    );
  }

  presentJobs() {
    return (
      <div>
        <p>LOOK AT ALL MY JOBS</p>
      </div>
    );
  }

  displayCurrentContent() {
    let currentContent = this.state.currentContent;

    if (currentContent == 'experiences') {
      return this.presentExperiences();
    } else if (currentContent == 'jobs')  {
      return this.presentJobs();
    } else {
      return <p>CLICK A BUTTON</p>
    }
  }

  handleClick(event) {
    this.setState({
      currentContent: event.target.id
    });
  }

  render() {
    let currentContent = this.state.currentContent
    let displayCurrentContent = this.displayCurrentContent();

    return (
      <div className="ui main container">
        {displayCurrentContent}
        {currentContent == 'experiences' ? 
          '' : 
          <button id="experiences" onClick={this.handleClick.bind(this)}>
            Show me the experiences
          </button>
        }
        {currentContent == 'jobs' ? 
          '' : 
          <button id="jobs" onClick={this.handleClick.bind(this)}>
            Show me the job info
          </button>
        }
      </div>
    );
  }
}

export default Jobs;
