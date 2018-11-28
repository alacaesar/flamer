import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Menu } from "../modules";

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Link className="logo" to="/">
          Flamer
        </Link>
        <Menu />
      </header>
    );
  }
}

export default Header;
