import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Exercise component, props (exercise, delete component and key) are passed in




const C11 = props => (
  
  <tr>
    <td rowSpan={2}>{props.c11.Vision}</td>
    <td>{props.c11.M1}</td>
    <td>{props.c11.M2}</td>
    <td>{props.c11.M3}</td>
    <td>{props.c11.M4}</td>
    <td>{props.c11.M5}</td>
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
export default class C11List extends Component {

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
      return <C11 c11={currentc11} deletec11={this.deletec11} key={currentc11._id} />
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

         
         
          
        <h3 >PEO-Mission Correlation</h3>



          <h1>Criteria1</h1>
          <form method="get" id="testformid">
    <input type="submit" />
</form> 
<textarea form ="testformid" name="taname" id="taid" cols="90" wrap="soft"></textarea>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Mission</th>
              <th>M1:Teaching Learning Process</th>
              <th>M2:Skill Development</th>
              <th>M3:Industry and academic colaborations</th>
              <th>M4:Research and development</th>
              <th>M5:Human values and ethics</th>
            </tr>
          </thead>
          <tbody>
            {this.c11List()}
          </tbody>
        </table>
        <Link to={"/c11/create"}>
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