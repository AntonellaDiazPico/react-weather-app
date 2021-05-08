import React, { useState } from "react";
// import Additionals from "./Additionals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export default function TempConversion(props) {
  // const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  
  function displayCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  if (props.unit === "celsius") {
    return (
      <div className= "row align-items-center">
        <div className="col-6">
        <p className="main-temp">
          {props.celsiusTemp}
          <span className="cf-symbol">
            <span className="active">
              °C
            </span>{" "}
            |
            <span onClick={displayFahrenheit}>
              °F
            </span>
          </span>
        </p>
        </div>
        <div className="col-6">
        <ul className="text-left todayHumidityWind">
            <li>
              <FontAwesomeIcon icon={faTemperatureHigh} />
              <span className="additionals">
                Feels like: {props.additionals.feelsLike}°C
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTint} />
              <span className="additionals-humidity">
                Humidity: {props.additionals.humidity}%
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} />
              <span className="additionals">Wind: {props.additionals.wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    let fahrenheitTemp = Math.round((props.celsiusTemp * 9) / 5 + 32);
    let feelsLike = Math.round((props.additionals.feelsLike * 9) / 5 + 32);
    return (
      <div className= "row align-items-center">
        <div className="col-6">
        <p className="main-temp">
          {fahrenheitTemp}
          <span className="cf-symbol">
            <span className="active" onClick={displayCelsius}>
              °C
            </span>{" "}
            |<span>°F</span>
          </span>
        </p>
        </div>
        <div className="col-6">
        <ul className="text-left todayHumidityWind">
            <li>
              <FontAwesomeIcon icon={faTemperatureHigh} />
              <span className="additionals">
                Feels like: {feelsLike}°C
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTint} />
              <span className="additionals-humidity">
                Humidity: {props.additionals.humidity}%
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} />
              <span className="additionals">Wind: {props.additionals.wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
