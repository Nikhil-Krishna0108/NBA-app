import React from "react";
import C21table from "./C21";
import C22table from "./C22";
// import C23table from './C23';
import C24table from "./C24";
import C25table from "./C25";
import C26table from "./C26";
import C27table from "./C27";
import Navbar from "./Navbar";
import TextBox from "./TextBox";
import C51table from "./C51";
import C52table from "./C52";
import C53table from "./C53";
import C54table from "./C54";
import C55table from "./C55";

export const Criteria5 = () => {
  return (
    <div>
      <Navbar />
      <div className="criteria-one">
        <h1>CRITERION 2 Program Curriculum and Teaching-learning process</h1>
        <TextBox />
        <C51table />
        <br />
        <C52table />
        <br />
        <C53table />
        <br />
        <C54table />
        <br />
        <C55table />
        <br />
        <C26table />
      </div>
    </div>
  );
};
