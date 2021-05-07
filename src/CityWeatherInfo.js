import React from "react";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";
import Additionals from "./Additionals";

import "./CityWeatherInfo.css";

export default function CityWeatherInfo(props) {
  return (
    <div className="CityWeatherInfo">
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
          <Additionals
            feelsLike={props.cityData.feelsLike}
            humidity={props.cityData.humidity}
            wind={props.cityData.wind}
          />
        </div>
      </div>
    </div>
  );
}
