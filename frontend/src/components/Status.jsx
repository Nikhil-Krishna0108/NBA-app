import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Navbar from "./Navbar";

const Status = () => {
  const Progress = ({ done }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }, 200);

    return (
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    );
  };

  return (
    <div className="status">
      <Navbar />
      <div className="status-heading">
        <h1 align="center">Check and update Criteria status</h1>
      </div>
      <div className="status-content">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <b>CRITERIA 1</b>
            </Accordion.Header>
            <Accordion.Body>
              Assigned to: <hr />
              Progress
              <Progress done="40" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <b>CRITERIA 2</b>
            </Accordion.Header>
            <Accordion.Body>
              Assigned to: <hr />
              Progress
              <Progress done="70" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <b>CRITERIA 3</b>
            </Accordion.Header>
            <Accordion.Body>
              Assigned to: <hr />
              Progress
              <Progress done="70" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <b>CRITERIA 4</b>
            </Accordion.Header>
            <Accordion.Body>
              Assigned to: <hr />
              Progress
              <Progress done="70" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <b>CRITERIA 5</b>
            </Accordion.Header>
            <Accordion.Body>
              Assigned to: <hr />
              Progress
              <Progress done="70" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              <b>CRITERIA 6</b>
            </Accordion.Header>
            <Accordion.Body>
              Assigned to: <hr />
              Progress
              <Progress done="70" />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Status;
