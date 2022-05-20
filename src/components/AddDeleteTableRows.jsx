import React, { useState } from "react";
import TableRows from "./TableRows";
import axios from 'axios';
export default class CreateVision extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeVis = this.onChangeVis.bind(this);
      this.onChangeM1 = this.onChangeM1.bind(this);
      this.onChangeM2 = this.onChangeM2.bind(this);
      this.onChangeM3 = this.onChangeM3.bind(this);
      this.onChangeM4 = this.onChangeM4.bind(this);
      this.onChangeM5 = this.onChangeM5.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        vis: '',
        M1: '',
        M2: '',
        M3: '',
        M4: '',
        M5: '',
 
      }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/visions/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
                username: response.data[0].username
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }
      onChangeVis(e) {
        this.setState({
          username: e.target.value
        })
      }
    
      // set value of description element to value of text box 
      onChangeM1(e) {
        this.setState({
          description: e.target.value
        })
      }
    
      // set value of duration element to value of text box 
      onChangeM2(e) {
        this.setState({
          duration: e.target.value
        })
      }
    
      // set value of date element to value of text box 
      onChangeM3(e) {
        this.setState({
          duration: e.target.value
        })
      }
      onChangeM4(e) {
        this.setState({
          duration: e.target.value
        })
      }
      onChangeM5(e) {
        this.setState({
          duration: e.target.value
        })
      }
    
      // prevent default form submit method from occuring
      // create an object variable called exercise
      // add exercise to database using axios post method
      // go back to home page (list of exercises)
      onSubmit(e) {
        e.preventDefault();
    
        const vision = {
          vis: this.state.vis,
          M1: this.state.M1,
          M2: this.state.M2,
          M3: this.state.M3,
          M4: this.state.M4,
          M4: this.state.M4,

        }
    
        console.log(vision);
    
        axios.post('http://localhost:5000/visions/add', exercise)
          .then(res => console.log(res.data));
    
        window.location = '/';
      }
}


function AddDeleteTableRows() {
  const [rowsData, setRowsData] = useState([1, 1, 1]);

  

  const addTableRows = () => {
    const rowsInput = {
      vis: "",
      M1: "",
      M2: "",
      M3: "",
      M4: "",
      M5: "",
    };
 
    setRowsData([...rowsData, rowsInput]);
  };
  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <table className="table">
            <thead>
              <tr>
                <th>Vision</th>
                <th>M1</th>
                <th>M2</th>
                <th>M3</th>
                <th>M4</th>
                <th>M5</th>
                <th>
                  <button
                    className="btn btn-outline-success"
                    onClick={addTableRows}
                  >
                    +
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRows
                rowsData={rowsData}
                deleteTableRows={deleteTableRows}
                handleChange={handleChange}
              />
            </tbody>
          </table>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}
//export default AddDeleteTableRows;