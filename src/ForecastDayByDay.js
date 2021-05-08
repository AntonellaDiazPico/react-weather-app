import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDayByDay(props) {
  let icon = props.forecast.weather[0].icon;

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function celsiusMaxTemp() {
    let celsiusMaxTemp = Math.round(props.forecast.temp.max);
    return celsiusMaxTemp;
  }

  function celsiusMinTemp(){
    let celsiusMinTemp = Math.round(props.forecast.temp.min);
    return celsiusMinTemp;
  }

  function fahrenheitMaxTemp() {
    let fahrenheitMaxTemp = Math.round((props.forecast.temp.max * 9) / 5 + 32);
    return fahrenheitMaxTemp;
  }

  function fahrenheitMinTemp() {
    let fahrenheitMinTemp = Math.round((props.forecast.temp.min * 9) / 5 + 32);
    return fahrenheitMinTemp;
  }

  if (props.unit === "celsius") {
    return (
      <div className="ForecastDayByDay">
        <div className="Forecast-day">{day()}</div>
        <div className="Forecast-icon">
          <WeatherIcon iconCode={icon} />
        </div>
        <div className="Forecast-maxTemp">
          {celsiusMaxTemp()}°{" "}
          <span className="Forecast-minTemp">{celsiusMinTemp()}°</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ForecastDayByDay">
        <div className="Forecast-day">{day()}</div>
        <div className="Forecast-icon">
          <WeatherIcon iconCode={icon} />
        </div>
        <div className="Forecast-maxTemp">
          {fahrenheitMaxTemp()}°{" "}
          <span className="Forecast-minTemp">{fahrenheitMinTemp()}°</span>
        </div>
      </div>
    );
  }
}
