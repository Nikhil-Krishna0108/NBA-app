
import C11table from "./C11";
import C12table from "./C12";
<<<<<<< HEAD
import React, {Component, PropTypes} from 'react';

export const Criteria1 = () => {
  return (
    <div>


      <div>
        <C11table />
      </div>
      

      <div>
=======
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
>>>>>>> 2dec762973ba87ea0f592632b47461dd2f13c20b
        <C12table />
        <br />
      </div>
<<<<<<< HEAD
      <div>
      <textarea id="w3review" name="w3review" rows="20" cols="200">1.1 State the Vision and Mission of the Department and Institute (5)
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
PEO 5: Graduates can establish as strong and sustainable leaders required for a successful professional career.
Program Specific Outcome (PSO)
PSO 1: Graduates will be proficient with analytical and logical skills for the design, development, testing and maintenance of software.
PSO 2: Graduates will be able to apply engineering knowledge to solve complex problems in the field of embedded computer systems.
PSO 3: Graduates will be skilled in facilitating quality system analysis and design for the development of highly efficient computer
networks.

1.2 Indicate where the Vision, Mission and PEOs are published and disseminated to
Stakeholders (10)
Vision, Mission and PEOs are published and disseminated to stakeholders through various means. To get valuable inputs from the stake
holders, these statements are circulated through various groups and forums like the alumni group, parent community group, prospective
employers and the student forums. The dissemination is in the form of mails, handouts, department newsletters, through display boards,
student lab manuals etc. and comments and suggestions taken. Also the vision, mission and PEOs are published on the college/department
website to be viewed by the stakeholders.
 Institution, Department Web-site
(http://www.dayanandasagar.edu/dsce/index.php/computer-science)
 Department News Letter
 Alumni Group(Published through Emails and Handouts)
 Parent Community (Published through Emails and Handouts)
 Student Forums (Published through Emails and Handouts)
 Department Display Boards (HOD Chamber (1), Notice Boards(3), Class Rooms(10) and Staff Rooms(2), Labs (10))
 Manuals/Handouts
 Mails to prospective Employers

1.3 State the processes for defining the Vision and Mission of the department and the PEOs of the program (25)
The processes for defining the Vision and Mission of the department and the PEOs of the program is as below:
 A Department level meeting is conducted to get inputs on Vision, Mission and PEO statements of the department from faculty members
considering the CS Code-of-Conduct from the standard CSE bodies of IEEE CS and ACM.
 Once the faculty inputs are taken, a committee comprising of HOD, Program Coordinator, Criteria Coordinator and two senior faculty
members frame the first version of Vision, Mission and PEO statements.
 E-mails are sent to parent and student communities to get inputs in framing Vision and Mission of the department.
E-mail is sent to Alumni group inviting their opinion on Vision, Mission and PEO‟s.
 Department invites Advisory board members to give their inputs and feedback on Vision, Mission and PEO‟s.
 Finally after getting inputs from all the stake holders‟, the Vision, Mission and PEO statements are frozen and sent for approval of the
management.
 Meeting is then conducted for discussing the modes of publishing and disseminating the statements.

The process of framing the Vision and Mission of the department and PEO‟s of the program are depicted in the flow diagrams below.</textarea>

<button>Submit</button>
      </div>

      

=======
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
>>>>>>> 2dec762973ba87ea0f592632b47461dd2f13c20b
    </div>

  );
};

export default Criteria1;
