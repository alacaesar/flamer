import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/billing/">Billing</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Main;
