import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-primary bg-light navbar-expand-lg">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {/* <li className="navbar-item">
              <Link to="/" className="nav-link">Exercises</Link>
            </li> */}
  
            <li className="navbar-item">
              <Link to="/criteria1" className="criteria1">Criteria1</Link>
            </li>
            <li className="navbar-item">
              <Link to="/criteria2" className="nav-link">Criteria 2</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Criteria 3</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Criteria 4</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Criteria 5</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Criteria 6</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Criteria 7</Link>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}