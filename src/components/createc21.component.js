import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateC21 extends Component {
  constructor(props) {
    super(props);

    this.onChangeProgramStructure = this.onChangeProgramStructure.bind(this);
    this.onChangeAICTE = this.onChangeAICTE.bind(this);
    this.onChangeVTU = this.onChangeVTU.bind(this);
 

    this.state = {
      ProgramStructure: '',
      AICTE: '',
      VTU: '',
    }
  }

  // React lifecycle method, called before displaying page
  // set state of users array
  // map users to database usernames
  // set username to first username in database
//   componentDidMount() {
//     axios.get('http://localhost:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username),
//             username: response.data[0].username
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//   }

  // set value of username element to value of text box 
  onChangeProgramStructure(e) {
    this.setState({
      ProgramStructure: e.target.value
    })
  }

  // set value of description element to value of text box 
  onChangeAICTE(e) {
    this.setState({
      AICTE: e.target.value
    })
  }
  onChangeVTU(e) {
    this.setState({
      VTU: e.target.value
    })
  }




  // prevent default form submit method from occuring
  // create an object variable called exercise
  // add exercise to database using axios post method
  // go back to home page (list of exercises)
  onSubmit(e) {
    e.preventDefault();

    const c21 = {
      ProgramStructure: this.state.ProgramStructure,
      AICTE: this.state.AICTE,
      VTU: this.state.VTU,
    }

    console.log(c21);

    axios.post('http://localhost:5000/c21/add', c21)
      .then(res => console.log(res.data));
      

    window.location = '/criteria2';
  }

  render() {
    return (
      <div>
        <h3>Add vission and mission</h3>
        <form onSubmit={this.onSubmit}>
           <div className="form-group">
            <label>Program Structure</label>
            <input type="text"
              className="form-control"
              value={this.state.ProgramStructure}
              onChange={this.onChangeProgramStructure}
              />
              {/* {
                this.state.users.map(function (user) {
                  return <option
                    key={user}
                    value={user}>{user}
                  </option>;
                })
              } */}
            
          </div> 
          <div className="form-group">
            <label>AICTE</label>
            <input type="text"
              className="form-control"
              value={this.state.AICTE}
              onChange={this.onChangeAICTE}
            />
          </div>
          <div className="form-group">
            <label>VTU</label>
            <input
              type="text"
              className="form-control"
              value={this.state.VTU}
              onChange={this.onChangeVTU}
            />
          </div>



          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}