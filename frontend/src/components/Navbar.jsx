import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-primary bg-light navbar-expand-lg">
        <Link to="/criteria1" className="navbar-brand">Criteria 1</Link>
        <Link to="/criteria2" className="navbar-brand">Criteria 2</Link>
        <Link to="/criteria1" className="navbar-brand">Criteria 3</Link>
        <Link to="/criteria1" className="navbar-brand">Criteria 4</Link>
        <Link to="/criteria1" className="navbar-brand">Criteria 5</Link>
        <Link to="/criteria1" className="navbar-brand">Criteria 6</Link>
        <Link to="/criteria1" className="navbar-brand">Criteria 7</Link>

      </nav>
    )
  }
}