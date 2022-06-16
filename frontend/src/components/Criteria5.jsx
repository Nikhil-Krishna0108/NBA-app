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
import C51table from './C51';
import C52table from './C52';
import C53table from './C53';
import C54table from './C54';
import C55table from './C55';
import FinalText_2 from "./FinalText_2";

export const Criteria5 = () => {
  return (
    <div>
      <Navbar />
      <div className="criteria-one">
        <h1>CRITERION 5 Faculty Information and contribution</h1>
        <h4>Student-Faculty Ratio(SFR)</h4>
        <div>

          <FinalText_2 tnum={2} />


        </div>
        <br />
        <h4>Faculty cadre proportion</h4>
        <C51table />
        <br />
        <C52table />
        <br />
        <h4>Faculty Qualification</h4>
        <C53table />
        <br />
        <h4>Innovations by faculty in teaching learning</h4>
        <div>

          <FinalText_2 tnum={3} />


        </div>
        <br />
        <h4>Faculty as participants in Faculty development</h4>
        <C54table />
        <br />
        <h4>Research and development</h4>
        <C55table />
        <br />
      </div>
    </div>
  );
};
