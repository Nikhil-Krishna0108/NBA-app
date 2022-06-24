import React from "react";
import C21table from "./C21";
import C22table from "./C22";
import C23table from "./C23";
import C24table from "./C24";
import C25table from "./C25";
import C26table from "./C26";
import C27table from "./C27";
import Navbar from "./Navbar";

import FinalText_2 from "./FinalText_2";
import Pdf from "react-to-pdf";

export const Criteria2 = () => {
  const ref = React.createRef();
  return (
    <div>
      <Navbar />
      <div className="criteria-one" ref={ref}>
        <h1 align="center">CRITERION 2 </h1>
        <h3 align="center">Program Curriculum and Teaching-learning process</h3>
        <br />
        <div>
          <FinalText_2 tnum={4} />
        </div>
        <br />
        <C21table />
        <br />
        <C22table />
        <br />
        <br />
        <div>
          <FinalText_2 tnum={5} />
        </div>
        <br />
        <C24table />
        <br />
        <C25table />
        <br />
        <C26table />
        <br />
        <C27table />
      </div>
      <Pdf
        targetRef={ref}
        filename="code-example.pdf"
        x={0.5}
        y={0.5}
        scale={0.3}
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
