import React from "react";
import C21table from "./C21";
import C22table from "./C22";
// import C23table from './C23';
import C24table from "./C24";
import C25table from "./C25";
import C26table from "./C26";
import C27table from "./C27";
import Navbar from "./Navbar";

export const Criteria2 = () => {
  return (
    <div>
      <Navbar />
      <div className="criteria-one">
        <C21table />
        <br />
        <C22table />
        <br />
        <C24table />
        <br />
        <C25table />
        <br />
        <C26table />
        <br />
        <C27table />
      </div>
    </div>
  );
};
