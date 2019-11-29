import React, { Component } from "react";
import axios from "axios";

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
    return <div>hej</div>
  }
}


export default Jobs;
