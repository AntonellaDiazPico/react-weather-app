import React from "react";

export default function Time() {
  let weatherData = {
    time: "12:08 pm"
  };
  return <h2 className="Time">{weatherData.time}</h2>;
}
