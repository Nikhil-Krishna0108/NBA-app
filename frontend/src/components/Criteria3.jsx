import React from "react";
import C31table from "./C31";
import C32table from "./C32";
import C33table from "./C33";
import C34table from "./C34";
import Pdf from "react-to-pdf";
import Navbar from "./Navbar";

// import FINAL_TEXT from "./FINAL_TEXT"
import FinalText_2 from "./FinalText_2";

export const Criteria3 = () => {
  const ref = React.createRef();
  return (
    <div>
      <Navbar />
      <div className="criteria-one" ref={ref}>
        <h1 align="center">Criteria 3</h1>
        <br />
        <h3>
          3.1 Establish the Correlation between the courses and the Program
          Outcome and Program Specific Outcomes (PSOs) (20)
        </h3>
        <br />
        <h3>
          3.1.1 Course Outcomes (COs).Course Outcomes of all the subjects from
          3rd to 8thsemester.(05)
        </h3>
        <br />
        <h4>Course Name: Discrete Mathematics Structures - C204</h4>
        <br />
        <div>
          <FinalText_2 tnum={1} />
        </div>
        <br />
        <br />
        <div>
          <FinalText_2 tnum={2} />
        </div>
        <br />
        <div>
          <C31table />
        </div>
        <br />
        <h4>Course Name: GRAPH THEORY AND COMBINATORICS - C210</h4>
        <br />

        <div>
          <C32table />
        </div>
        <br />
        <h4>Course Name: SYSTEM SOFTWARE - C302</h4>
        <br />

        <div>
          <C33table />
        </div>
        <br />
        <h3>
          3.1.2 CO-PO matrices of courses selected in 3.1.1 for three batches
          namely 2010-14 batch, 2011-14 batch and 2012-16 batch (05)
        </h3>
        <br />
        <h4>Course Name: Discrete Mathematics Structures - C204</h4>
        <br />
        <div>
          <C34table />
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
