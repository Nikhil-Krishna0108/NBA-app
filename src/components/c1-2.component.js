import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Exercise component, props (exercise, delete component and key) are passed in
const c12 = props => (
  
  <tr>
    <td rowSpan={2}>{props.c12.vis}</td>
    <td>{props.c12.M1}</td>
    <td>{props.c12.M2}</td>
    <td>{props.c12.M3}</td>
    <td>{props.c12.M4}</td>
    <td>{props.c12.M5}</td>
    <td>
      <Link to={"/edit/" + props.c11._id}>
        <button
          type="button"
          className="btn btn-primary btn-sm">
          Edit
        </button>
      </Link>
      {" "}
      <button
        onClick={() => { props.deletec11(props.c11._id)}}
        className="btn btn-danger btn-sm">
        Delete
      </button>
      
    </td>
  </tr>
  
  
)
export default class C12List extends Component {

  constructor(props) {
    super(props);

    this.deletec11 = this.deletec11.bind(this);
    this.state = { c11: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/c11/')
      .then(response => {
        this.setState({ c11: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  // For every element in the exercise array return an Exercise component
  // pass in 3 props
  c11List() {
    return this.state.c11.map(currentc11 => {
      return <c11 c11={currentc11} deletec11={this.deletec11} key={currentc11._id} />
    })
    // return this.state.exercises.map(currentexercise => {
      // return (<>
      // <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
      // </>)
    // })
  }

  // use axios delete and filter array so database elements not matching the chosen id are kept
  deletec11(id) {
    axios.delete('http://localhost:5000/c11/' + id)
      .then(res => console.log(res.data));
    this.setState({
      c11: this.state.c11.filter(el => el._id !== id)
    })
  }

  // show a table with 5 columns
  render() {
    return (
      <div>
          <h1>Table-2: PEO – Mission Correlation Justification</h1>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
         />
          
        <h3 >PEO-Mission Correlation</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>PEO</th>
              <th>Mission</th>
              <th>Correlation</th>
              <th>Justification</th>

            </tr>
          </thead>
          <tbody>
            {this.c11List()}
          </tbody>
        </table>
        <Link to={"/create"}>
        <button
          type="button"
          className="nav-link">
          Add new row
        </button>
      </Link>
     


      </div>
      

    )

  }
}