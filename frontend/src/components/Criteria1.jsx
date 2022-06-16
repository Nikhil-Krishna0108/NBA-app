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

      <h1>CRITERION 1 Vision, Mission And Program Education Objectives</h1>
      <textarea rows="10" cols="150" name="description"> (Describe the process that periodically documents and demonstrates how the program curriculum is evolved considering the POs and PSOs)
Inputs are taken from the placement office, alumni, professors for framing the syllabus. PO’s & PSO’s are also considered during this process. The draft of the syllabus is framed in compliance with syllabus from other affiliated universities and AICTE. PO attainment and college level mandates are also considered along with the previous versions of our own curriculum. This version is presented to the Industry experts for the review during the Industry Conclave. Considering the suggestions provided, the scheme is revised and then presented to BoS members. The comments and suggestions given are incorporated. The scheme and the syllabus are further revised. On approval of the same by DAC, it is sent to the governing council for approval. The approved copy is published as the final syllabus. The curriculum is structured in such a way that the course code, course title is framed along with the total number of contact hours and credits. The contact hours include Lecture hours, tutorial hours and practical hours (1 hours = 1 credit). 
</textarea>
<button>Submit</button>
      <div>1.1 State the Vision and Mission of the Department and Institute (5)
Vision and Mission of the Institute
Vision
To impart quality technical education with a focus on Research and Innovation emphasizing on Development of Sustainable and
Inclusive Technology for the benefit of society.
Mission

 To provide an environment that enhances creativity and Innovation in pursuit of Excellence.
 To nurture teamwork in order to transform individuals as responsible leaders and Entrepreneurs.
 To train the students to the changing technical scenario and make them to understand the importance of Sustainable and Inclusive
technologies.
Vision and Mission of the Department
Vision
To provide a vibrant learning environment in computer science and engineering with focus on industry needs and research, for the
students to be successful global professionals contributing to the society.
Mission
 To adopt a contemporary teaching learning process with emphasis on hands on and collaborative learning
 To facilitate skill development through additional training and encourage student forums for enhanced learning.

 To collaborate with industry partners and professional societies and make the students industry ready.
 To encourage innovation through multidisciplinary research and development activities
 To inculcate human values and ethics in students and groom them to be responsible citizens.

The department Vision–Mission statements are formulated in accordance with the goals and objectives of the department keeping Institutional
goals and objectives under consideration.
1.1 State the Program Education Objectives (PEOs) (5)
PEO 1: Graduates will possess strong foundation in Basic and Engineering Sciences that are required for problem solving to excel and
succeed in their profession.
PEO 2: Graduates will have excellent scientific and engineering breadth so as to comprehend, analyse, design and solve real life
problems using the acquired skills and lifelong learning.
PEO 3: Graduates will have exposure to emerging cutting edge technologies and adequate training with opportunity to work on
multidisciplinary projects.
PEO 4: Graduates will be professional with ethical attitude, effective communication skills, teamwork capability, and relate engineering
issues to broader social context.
PEO 5: Graduates can establish as strong and sustainable leaders required for a successful professional career.</div>
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