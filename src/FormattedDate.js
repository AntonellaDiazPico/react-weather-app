import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
	
	let formattedDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let formattedMonth = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	let weekDay = formattedDay[props.date.getDay()];
	let day = props.date.getDate();
	let month = formattedMonth[props.date.getMonth()];
	let year = props.date.getFullYear();
	let hours = props.date.getHours();
	let minutes = props.date.getMinutes();
	if (minutes < 10) {
		minutes = (`0${minutes}`);
	}
	let amPm = hours <= 11 ? "am" : "pm";
  hours = hours % 12 || 12;

  return(
    <div className="FormattedDate">
      <div className="date">{weekDay}, {day}.{month}.{year}</div>
    	<h2 className="time">{hours}:{minutes} {amPm}</h2>
    </div>
    );
}