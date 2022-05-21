import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import C11List from "./c1-1.component";
import C12List from "./c1-2.component";
import Navbar from "./navbar.component";

export default function Criteria1() {
  return (
    <div>
      <C11List />
      <br />
      <C12List />
    </div>
  );
}
