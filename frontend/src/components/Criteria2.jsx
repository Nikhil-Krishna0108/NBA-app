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

export const Criteria2 = () => {
  return (
    <div>
      <Navbar />
      <div className="criteria-one">
    <h1>CRITERION 2 Program Curriculum and Teaching-learning process</h1> 
    <textarea rows="10" cols="150" name="description"> (Describe the process that periodically documents and demonstrates how the program curriculum is evolved considering the POs and PSOs)
Inputs are taken from the placement office, alumni, professors for framing the syllabus. PO’s & PSO’s are also considered during this process. The draft of the syllabus is framed in compliance with syllabus from other affiliated universities and AICTE. PO attainment and college level mandates are also considered along with the previous versions of our own curriculum. This version is presented to the Industry experts for the review during the Industry Conclave. Considering the suggestions provided, the scheme is revised and then presented to BoS members. The comments and suggestions given are incorporated. The scheme and the syllabus are further revised. On approval of the same by DAC, it is sent to the governing council for approval. The approved copy is published as the final syllabus. The curriculum is structured in such a way that the course code, course title is framed along with the total number of contact hours and credits. The contact hours include Lecture hours, tutorial hours and practical hours (1 hours = 1 credit). 
</textarea>
<button>Submit</button>
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
