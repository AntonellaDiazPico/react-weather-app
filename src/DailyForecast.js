import React, { useEffect, useState } from "react";
import ForecastDayByDay from "./ForecastDayByDay";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  function handleForecastResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  if (ready) {
    return (
      <div className="row DailyForecast">
        {forecastData.map(function (dailyForecastData, index) {
          if (index < 6 && index > 0) {
          return (
            <div className="col" key={index}>
              <ForecastDayByDay forecast={dailyForecastData} />
            </div>
          );
        } else {
          return null;
        }
        })}
      </div>
    );
  }
 else {
    let apiKey = "7397d5769aa7c8ab77c0945b1e990b7d";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}