import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <>
        <div className="container">
          <img
            src="https://image.flaticon.com/icons/png/512/194/194938.png"
            alt="avatar"
            className="avatar"
          />
          <h4>Jane Doe</h4>
        </div>
      </>
    );
  }
}

export default Profile;
