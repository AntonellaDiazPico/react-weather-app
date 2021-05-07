import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDayByDay(props) {
  let maxTemperature = Math.round(props.forecast.temp.max);
  let minTemperature = Math.round(props.forecast.temp.min);
  let icon = props.forecast.weather[0].icon;

  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDayByDay">
      <div className="Forecast-day">{day()}</div>
      <div className="Forecast-icon">
        <WeatherIcon iconCode={icon} />
      </div>
      <div className="Forecast-maxTemp">
        {maxTemperature}°{" "}
        <span className="Forecast-minTemp">{minTemperature}°</span>
      </div>
    </div>
  );
}
