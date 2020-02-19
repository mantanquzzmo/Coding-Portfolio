import React from "react";

const CVContent = props => {
  let content = props.data;
  return (
    <div className="column cv">
      <i>
        {content.start} to {content.end}
        <br></br>
      </i>
      <b>
        {content.organization}
        <br></br>
      </b>
      <i>{content.title}</i>
      <p>{content.description}</p>
    </div>
  );
};

export default CVContent;
