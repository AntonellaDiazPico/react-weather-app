import React from "react";
import "./DateTime.css";

export default function DateTime(props) {
	
	let formattedDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let formattedMonth = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	let weekDay = formattedDay[props.dateTime.getDay()];
	let day = props.dateTime.getDate();
	let month = formattedMonth[props.dateTime.getMonth()];
	let year = props.dateTime.getFullYear();
	let hours = props.dateTime.getHours();
	let minutes = props.dateTime.getMinutes();
	if (minutes < 10) {
		minutes = (`0${minutes}`);
	}
	let amPm = hours <= 11 ? "am" : "pm";
  hours = hours % 12 || 12;

  return(
    <div className="DateTime">
      <div className="date">{weekDay}, {day}.{month}.{year}</div>
    	<h2 className="time">{hours}:{minutes} {amPm}</h2>
    </div>
    );
}