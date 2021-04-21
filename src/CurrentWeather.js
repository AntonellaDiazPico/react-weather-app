import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'


export default function CurrentWeather() {

  let weatherData = {
    icon: <FontAwesomeIcon icon={faCloudShowersHeavy} />,
    description: "raining",
    mainTemp: 21,
    feelsLike: 23,
    humidity: 40,
    wind: 13
  };
  return (
    <div className="CurrentWeather">
      <div className="row d-flex align-items-center weather">
        <div className="col-sm">
          <ul className="todayWeather">
            <li className="current-icon">{weatherData.icon}</li>
            {/* <li>
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  className="current-icon"
                  id="current-icon"
                />
              </li> */}

            <li className="text-capitalize presentClimate">
              {weatherData.description}
            </li>
          </ul>
        </div>

        <div className="col-sm">
          <p className="main-temp">
            {weatherData.mainTemp}
            <span className="cf-symbol">
              <a href="/" id="celsius-link" className="active">
                °C
              </a>{" "}
              |
              <a href="/" id="fahrenheit-link">
                °F
              </a>
            </span>
          </p>
        </div>

        <div className="col-sm">
          <ul className="todayHumidityWind">
            <li>
            <FontAwesomeIcon icon={faTemperatureHigh} />
              <span className="extras">Feels like: {weatherData.feelsLike}°C</span>
            </li>
            <li>
            <FontAwesomeIcon icon={faTint} />
              <span className="extras-humidity">Humidity: {weatherData.humidity}%</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} /><span className="extras">Wind: {weatherData.wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
