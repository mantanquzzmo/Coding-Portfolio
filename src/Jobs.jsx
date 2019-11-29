import React, { Component } from "react";
import axios from "axios";
import JobsCard from "./JobsCard";

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
    let jobsList

    if (jobs.length > 0) {
      jobsList = jobs.map(job => {
        return (
          <div key={job.id}>
            <JobsCard job={job} />
          </div>
        )
      })
    }

    return (
      <div className="ui stackable four column grid">{jobsList}</div>
    )
  }
}


export default Jobs;
