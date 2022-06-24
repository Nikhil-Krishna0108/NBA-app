import React from "react";
import C41table from "./C41";
import C42table from "./C42";
import C43table from "./C43";
import C44table from "./C44";
import C45table from "./C45";
import C46table from "./C46";
import Navbar from "./Navbar";
import Pdf from "react-to-pdf";
import FinalText_2 from "./FinalText_2";

export const Criteria4 = () => {
  const ref = React.createRef();
  return (
    <div>
      <Navbar />
      <div className="criteria-four" ref={ref}>
        <h1 align="center">Criteria 4</h1>
        <br />
        <br />
        <h4>
        Student Performance
        </h4>
        <div>
          <p>
            N : Sanctioned Intake of the program. <br/>
            N1 : Total number of students admitted in first year minus number of students migrated to other programs/institutions plus number of students migrated to this program.<br/>
            N2 : Number of students admitted in 2nd year for the same batch through lateral entry.<br/>
            N3 : Separate division of students if applicable.<br/>
          </p>
          <C41table />
        </div>
        <br />
        <br />
        <div>
          <p>
            Number of students who graduated successfully without backlogs:
          </p>
          <C42table />
        </div>
        <br />
        <h4>
          Success rate calculation in the program
        </h4>
        <div>
          <FinalText_2 tnum={10} />
        </div>
        <br />        
        <h4>
          Professional Activities
        </h4>
        <div>
          <C43table />
        </div>
        <br />
        <h4>
          Publication of technical magazines, Newsletters
        </h4> 
        <div>
          <C44table />
        </div>
        <br />
        <h4>
          Participation in inter-institution events by students in program of study
        </h4>
        <div>
          <C45table />
        </div>
        <br/>
        <h4>
          Students pursuing PH.D.
        </h4>
        <div>
          <C46table />
        </div>
      </div>
      <Pdf
        targetRef={ref}
        filename="code-example.pdf"
        x={0.6}
        y={0.6}
        scale={0.6}
      >
        {({ toPdf }) => (
          <button className="btn btn-primary btn-l btn-option" onClick={toPdf}>
            Generate Pdf
          </button>
        )}
      </Pdf>
    </div>
  );
};
