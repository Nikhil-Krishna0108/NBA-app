import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditC11 extends Component {
  constructor(props) {
    super(props);

    this.onChangevision = this.onChangevision.bind(this);
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

  // get exercise from backend using id from url - props.match.params.id
  // set state of object items using data from database
  componentDidMount() {
    axios.get('http://localhost:5000/c11/' + this.props.match.params.id)
      .then(response => {
        this.setState({
   
          vis: response.data.vis,
          M1: response.data.M1,
          M2: response.data.M2,
          M3: response.data.M3,
          M4: response.data.M4,
          M5: response.data.M5,
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    // axios.get('http://localhost:5000/users/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.username),
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }

  onChangevision(e) {
    this.setState({
      vis: e.target.value
    })
  }

  // set value of description element to value of text box 
  onChangeM1(e) {
    this.setState({
      M1: e.target.value
    })
  }
  onChangeM2(e) {
    this.setState({
      M2: e.target.value
    })
  }
  onChangeM3(e) {
    this.setState({
      M3: e.target.value
    })
  }
  onChangeM4(e) {
    this.setState({
      M4: e.target.value
    })
  }
  onChangeM5(e) {
    this.setState({
      M5: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const c11 = {
        vis: this.state.vis,
        M1: this.state.M1,
        M2: this.state.M2,
        M3: this.state.M3,
        M4: this.state.M4,
        M5: this.state.M5,
      }
  
      console.log(c11);

   

    axios.post('http://localhost:5000/c11/update/' + this.props.match.params.id, c11)
      .then(res => console.log(res.data));

    window.location = '/criteria1';
  }

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
           <div className="form-group">
            <label>Vision</label>
            <input type="text"
              className="form-control"
              value={this.state.vis}
              onChange={this.onChangevision}
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
            <label>M1</label>
            <input type="text"
              required
              className="form-control"
              value={this.state.M1}
              onChange={this.onChangeM1}
            />
          </div>
          <div className="form-group">
            <label>M2</label>
            <input
              type="text"
              className="form-control"
              value={this.state.M2}
              onChange={this.onChangeM2}
            />
          </div>
          <div className="form-group">
            <label>M3</label>
            <input
              type="text"
              className="form-control"
              value={this.state.M3}
              onChange={this.onChangeM3}
            />
          </div>
          <div className="form-group">
            <label>M4</label>
            <input
              type="text"
              className="form-control"
              value={this.state.M4}
              onChange={this.onChangeM4}
            />
          </div>
          <div className="form-group">
            <label>M5</label>
            <input
              type="text"
              className="form-control"
              value={this.state.M5}
              onChange={this.onChangeM5}
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