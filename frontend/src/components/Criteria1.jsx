import React from "react";
import C11table from "./C11";
import C12table from "./C12";
import Pdf from "react-to-pdf";

const Criteria1 = () => {
  const ref = React.createRef();
  return (
    <div>
      <Pdf
        targetRef={ref}
        filename="code-example.pdf"
        x={0.7}
        y={0.7}
        scale={0.7}
      >
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div className="criteria-one" ref={ref}>
        <C11table />

        <C12table />
      </div>
    </div>
  );
};

export default Criteria1;
