import React from "react";

const JobsCard = props => {
  let job = props.job;
  return (
    <>
      <div class="ui card">
        <div class="image">
            <img src={job.image} width="260" height="260" />
        </div>
        <div class="content">
          <h3 class="ui header">{job.company}</h3>
          <h5 class="ui header">{job.title}</h5>
          <h6 class="ui header">{job.time}</h6>
          <div class="description">{job.desc}</div>
        </div>
      </div>
    </>
  );
};

export default JobsCard;
