import React from "react";

export default function Date() {
  let weatherData = {
    date: "Friday, 29.02.2021"
  };
  return <div className="Date">{weatherData.date}</div>;
}
