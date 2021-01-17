import React, { Component } from "react";
import Profile from "./Profile";
import Menus from "./Menus";

export class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="row ">
          <div className="sidebar">
            <Profile />
            <Menus />
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
