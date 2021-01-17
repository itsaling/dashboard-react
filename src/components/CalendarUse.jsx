import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarUse() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="card-container">
      <div className="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default CalendarUse;
