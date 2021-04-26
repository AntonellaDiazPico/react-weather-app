import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'


export default function WeatherEngine() {

  let weatherData = {
    icon: <FontAwesomeIcon icon={faCloudShowersHeavy} />,
    description: "raining",
    mainTemp: 21,
    feelsLike: 23,
    humidity: 40,
    wind: 13
  };
  return (
    <div className="WeatherEngine">

      {/* SEARCH ENGINE BEGINS */}
    <div className="SearchEngine">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <form className="searchBar">
            <input
              className="citySearch"
              type="text"
              placeholder="Where to today?"
              autoComplete="off"
            />
          </form>
          <button className="location-btn">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          </button>
        </div>
      </div>
    </div>
    {/* SEARCH ENGINE ENDS */}

    {/* CITY, DATE & TIME BEGINS */}
    <h1 className="text-capitalize city">Sunshine Coast</h1>
    <div className="date">Friday, 29.02.2021</div>
    <h2 className="time">12:08 pm</h2>

    {/* CITY, DATE & TIME ENDS */}

    {/* MAIN WEATHER INFO START */}
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
      {/* MAIN WEATHER INFO ENDS */}
    </div>
  );
}