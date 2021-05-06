import React from "react";
import DateTime from "./DateTime.js";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import "./CityWeatherInfo.css";

export default function CityWeatherInfo(props) {
  return (
    <div className="CityWeatherInfo">
      {/* CITY, DATE & TIME BEGINS */}
      <h1 className="text-capitalize city">{props.cityData.city}</h1>
      <DateTime dateTime={props.cityData.dateTime} />

      {/* MAIN WEATHER INFO START */}
      <div className="row d-flex align-items-center weather">
        <div className="col-sm">
          <ul className="todayWeather">
            <li className="current-icon">
              <WeatherIcon iconCode={props.cityData.icon} />
            </li>
            <li className="text-capitalize description">
              {props.cityData.description}
            </li>
          </ul>
        </div>

        <div className="col-sm">
          <TempConversion celsiusTemp={props.cityData.temperature} />
        </div>

        <div className="col-sm">
          <ul className="text-left todayHumidityWind">
            <li>
              <FontAwesomeIcon icon={faTemperatureHigh} />
              <span className="extras">
                Feels like: {props.cityData.feelsLike}°C
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTint} />
              <span className="extras-humidity">
                Humidity: {props.cityData.humidity}%
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} />
              <span className="extras">Wind: {props.cityData.wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
      {/* MAIN WEATHER INFO ENDS */}
    </div>
  );
}
