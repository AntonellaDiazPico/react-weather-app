import React from "react";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";

import "./CityWeatherInfo.css";

export default function CityWeatherInfo(props) {
  return (
    <div className="CityWeatherInfo">
      <div className="row d-flex align-items-center weather">
        <div className="col-4">
          <ul className="todayWeather">
            <li className="current-icon">
              <WeatherIcon iconCode={props.cityData.icon} />
            </li>
            <li className="text-capitalize description">
              {props.cityData.description}
            </li>
          </ul>
        </div>

        <div className="col-8">
          <TempConversion
            celsiusTemp={props.cityData.temperature}
            unit={props.unit}
            setUnit={props.setUnit}
            additionals={props.cityData}
          />
        </div>
      </div>
    </div>
  );
}
