import React from "react";
import logo from "./logo.svg";

import "./style.css";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" className="logo mb-4" />
      </header>
    );
  }
}
