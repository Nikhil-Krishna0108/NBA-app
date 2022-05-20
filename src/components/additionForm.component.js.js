import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useState,useEffect} from 'react';
import UpdateForm from './additionForm.component.js';


export default function UpdateForm({route}){
  const [inputData,setInputData]=useState({});
  let states=[useState(),useState()]
  // username: '',
  // description: '',
  // duration: 0,
  // date: new Date(),
  // users: []
  useEffect(()=>{
    axios.get(`http://localhost:5000/${route}/`)
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
  },[])
  return(
    <div>
        <h3>Add An Exercise</h3>
        <form onSubmit={this.onSubmit}>
          {inputData.map(x=>(

            <div className="form-group">
            <label>{x} </label>
            <input type="text"
              className="form-control"
              value={inputData[x]}
              onChange={(e)=>setInputData({...inputData,[x]:e.target.value})}
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
              ))}
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
  )
}

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  // React lifecycle method, called before displaying page
  // set state of users array
  // map users to database usernames
  // set username to first username in database
  componentDidMount() {
    axios.get('http://localhost:5000/users/')
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

  // set value of username element to value of text box 
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  // set value of description element to value of text box 
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  // set value of duration element to value of text box 
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  // set value of date element to value of text box 
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  // prevent default form submit method from occuring
  // create an object variable called exercise
  // add exercise to database using axios post method
  // go back to home page (list of exercises)
  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Add An Exercise</h3>
        <form onSubmit={this.onSubmit}>
           <div className="form-group">
            <label>Username: </label>
            <input type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
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
            <label>Description: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}