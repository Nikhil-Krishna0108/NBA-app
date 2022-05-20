import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Exercise component, props (exercise, delete component and key) are passed in



const c21 = props => (
  
  <tr>
    <td rowSpan={2}>{props.c21.Vision}</td>
    <td>{props.c21.M1}</td>
    <td>{props.c21.M2}</td>
    <td>{props.c21.M3}</td>
    <td>{props.c21.M4}</td>
    <td>{props.c21.M5}</td>
    <td>
      <Link to={"/edit/" + props.c21._id}>
        <button
          type="button"
          className="btn btn-primary btn-sm">
          Edit
        </button>
      </Link>
      {" "}
      <button
        onClick={() => { props.deletec21(props.c21._id)}}
        className="btn btn-danger btn-sm">
        Delete
      </button>
      
    </td>
  </tr>
  
  
)
export default class C21List extends Component {

  constructor(props) {
    super(props);

    this.deletec21 = this.deletec21.bind(this);
    this.state = { c21: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/c21/')
      .then(response => {
        this.setState({ c21: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  // For every element in the exercise array return an Exercise component
  // pass in 3 props
  c21List() {
    return this.state.c21.map(currentc21 => {
      return <c21 c21={currentc21} deletec21={this.deletec21} key={currentc21._id} />
    })
    // return this.state.exercises.map(currentexercise => {
      // return (<>
      // <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
      // </>)
    // })
  }

  // use axios delete and filter array so database elements not matching the chosen id are kept
  deletec21(id) {
    axios.delete('http://localhost:5000/c21/' + id)
      .then(res => console.log(res.data));
    this.setState({
      c21: this.state.c21.filter(el => el._id !== id)
    })
  }

  // show a table with 5 columns
  render() {
    return (
      

  




      <div>

         
         
          
        <h3 >PEO-Mission Correlation</h3>



          <h1>Criteria2:Program Curriculum and Teaching-learning process</h1>
          <form method="get" id="testformid">
    <input type="submit" />
</form> 
<textarea form ="testformid" name="taname" id="taid" cols="90" wrap="soft"></textarea>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Program Structure</th>
              <th>AICTE</th>
              <th>VTU</th>
            </tr>
          </thead>
          <tbody>
            {this.c21List()}
          </tbody>
        </table>
        <Link to={"/c21/create"}>
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