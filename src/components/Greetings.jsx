import React from "react";
import moment from "moment";

function Greetings() {
  function getToday() {
    return moment().format("MMMM Do YYYY");
  }

  return (
    <div className="flex-box">
      <h1>Welcome</h1>
      {getToday()}
    </div>
  );
}

export default Greetings;
