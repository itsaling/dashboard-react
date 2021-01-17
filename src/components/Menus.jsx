import React, { Component } from "react";
// import { Link } from "react-router-dom";

export class Menus extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <i className="fas fa-home"></i> Home
            </li>
            <li>
              <i className="fas fa-compass"></i> Insight
            </li>
            <li>
              <i className="fas fa-arrows-alt-h"></i> Transaction
            </li>
            <li>
              <i className="fas fa-heart"></i> Services
            </li>
            <li>____</li>
            <li>
              <i className="fas fa-user-circle"></i> Account
            </li>
            <li>
              <i className="fas fa-cogs"></i> Settings
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menus;
