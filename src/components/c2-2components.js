import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Exercise component, props (exercise, delete component and key) are passed in



const c22 = props => (
  
  <tr>
    <td>{props.c22.Subjects}</td>
    <td>{props.c22.PO1}</td>
    <td>{props.c22.PO2}</td>
    <td>{props.c22.PO3}</td>
    <td>{props.c22.PO4}</td>
    <td>{props.c22.PO5}</td>
    <td>{props.c22.PO6}</td>
    <td>{props.c22.PO7}</td>
    <td>{props.c22.PO8}</td>
    <td>{props.c22.PO9}</td>
    <td>{props.c22.PO10}</td>
    <td>{props.c22.PO11}</td>
    <td>{props.c22.PO12}</td>
    <td>{props.c22.PSO1}</td>
    <td>{props.c22.PSO1}</td>
    <td>{props.c22.PSO1}</td>


    <td>
      <Link to={"/edit/" + props.c22._id}>
        <button
          type="button"
          className="btn btn-primary btn-sm">
          Edit
        </button>
      </Link>
      {" "}
      <button
        onClick={() => { props.deletec22(props.c22._id)}}
        className="btn btn-danger btn-sm">
        Delete
      </button>
      
    </td>
  </tr>
  
  
)
export default class C22List extends Component {

  constructor(props) {
    super(props);

    this.deletec22 = this.deletec22.bind(this);
    this.state = { c22: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/c22/')
      .then(response => {
        this.setState({ c22: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  // For every element in the exercise array return an Exercise component
  // pass in 3 props
  c22List() {
    return this.state.c22.map(currentc22 => {
      return <c22 c22={currentc22} deletec22={this.deletec22} key={currentc22._id} />
    })
    // return this.state.exercises.map(currentexercise => {
      // return (<>
      // <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
      // </>)
    // })
  }

  // use axios delete and filter array so database elements not matching the chosen id are kept
  deletec22(id) {
    axios.delete('http://localhost:5000/c22/' + id)
      .then(res => console.log(res.data));
    this.setState({
      c22: this.state.c22.filter(el => el._id !== id)
    })
  }

  // show a table with 5 columns
  render() {
    return (
      

  




      <div>

         
         
          
    



          <h1>Criteria2:Program Curriculum and Teaching-learning process</h1>
          <h2>Table 2: Subject to PO/PSO mapping</h2>
          <form method="get" id="testformid">
    <input type="submit" />
</form> 
<textarea form ="testformid" name="taname" id="taid" cols="90" wrap="soft"></textarea>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Subjects</th>
              <th>PO1</th>
              <th>PO2</th>
              <th>PO3</th>
              <th>PO4</th>
              <th>PO5</th>
              <th>PO6</th>
              <th>PO7</th>
              <th>PO8</th>
              <th>PO9</th>
              <th>PO10</th>
              <th>PO11</th>
              <th>PO12</th>
              <th>PSO1</th>
              <th>PSO1</th>
              <th>PSO1</th>
       
            </tr>
          </thead>
          <tbody>
            {this.c22List()}
          </tbody>
          
        </table>
        <Link to={"/c22/create"}>
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