import React from "react";
// import C23table from './C23';
import Navbar from "./Navbar";
import TextBox from "./TextBox";
import C61table from "./C61";
import C62table from "./C62";
import C63table from "./C63";
import FinalText_2 from "./FinalText_2";

import Pdf from "react-to-pdf";

export const Criteria6 = () => {
  const ref = React.createRef();
  return (
    <div>
      <Navbar />
      <div className="criteria-one" ref={ref}>
        <h1 align="center">CRITERION 6 </h1>
        <br />
        <h2 align="center">Facilities and technical support</h2>
        <TextBox /> <br />
        <h4>Adequate well equipped laboratories with manpower</h4>
        <C61table />
        <br />
        <h4>
          Additional facilities created for improving the quality of learning
          experience
        </h4>
        <C62table />
        <br />
        <h4>Laboratories: Maintenance overall</h4>
        <div>
          <FinalText_2 tnum={100} />
        </div>
        <br />
        <h4>Safety measures in laboratories</h4>
        <C63table />
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
