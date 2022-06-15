import React from "react";
import C11table from "./C11";
import C12table from "./C12";
import Pdf from "react-to-pdf";
import Navbar from "./Navbar";

const Criteria1 = () => {
  const ref = React.createRef();
  return (
    <div>
      <Navbar />

      <div className="criteria-one" ref={ref}>
        <C11table />
        <br />
        <C12table />
        <br />
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

export default Criteria1;
