import React from "react";
// import C23table from './C23';
import Navbar from "./Navbar";
import TextBox from "./TextBox";
import C61table from './C61';
import C62table from './C62';
import C63table from './C63';
import FinalText_2 from "./FinalText_2";

export const Criteria6 = () => {
  return (
    <div>
      <Navbar />
      <div className="criteria-one">
        <h1>CRITERION 6 Facilities and technical support</h1>
        <TextBox />
        <h4>Adequate well equipped laboratories with manpower</h4>
        <C61table />
        <br />
        <h4>Additional facilities created for improving the quality of learning experience</h4>
        <C62table />
        <br />
        <h4>Laboratories: Maintenance overall</h4>
        <div>
          
          <FinalText_2 tnum={100}/>


        </div>
        <br />
        <h4>Safety measures in laboratories</h4>
        <C63table />

      </div>
    </div>
  );
};
