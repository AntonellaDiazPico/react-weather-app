import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");

  }

if (unit === "celsius") {
  return (
    <div>
      <p className="main-temp">
        {props.celsiusTemp}
        <span className="cf-symbol">
          <a href="/" className="active">
            °C
          </a>{" "}
          |
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </p>
    </div>
  );
} else {
  let fahrenheitTemp = Math.round((props.celsiusTemp * 9 / 5) + 32);
  return (
    <div>
      <p className="main-temp">
        {fahrenheitTemp}
        <span className="cf-symbol">
          <a href="/" className="active" onClick={displayCelsius}>
            °C
          </a>{" "}
          |
          <a href="/" >
            °F
          </a>
        </span>
      </p>
    </div>
  ); 
}
}
