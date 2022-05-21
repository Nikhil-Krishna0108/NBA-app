import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateC21 extends Component {
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
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
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
  onChangevision(e) {
    this.setState({
      u: e.target.value,
    });
  }

  // set value of description element to value of text box
  onChangeM1(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeM2(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeM3(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeM4(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeM5(e) {
    this.setState({
      description: e.target.value,
    });
  }

  // prevent default form submit method from occuring
  // create an object variable called exercise
  // add exercise to database using axios post method
  // go back to home page (list of exercises)
  onSubmit(e) {
    e.preventDefault();

    const c21 = {
      vision: this.state.vision,
      M1: this.state.M1,
      M2: this.state.M2,
      M3: this.state.M3,
      M4: this.state.M4,
      M5: this.state.M5,
    };

    console.log(c11);

    axios
      .post("http://localhost:5000/c11/add", c11)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Add vision and mission</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Vision</label>
            <input
              type="text"
              className="form-control"
              value={this.state.vision}
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
            <input
              type="text"
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
    );
  }
}
