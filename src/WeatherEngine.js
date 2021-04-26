import React, { useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'


export default function WeatherEngine(props) {
  const [ready, setReady] = useState(false);
  const [wheatherData, setWeatherData] = useState({});

  function handleCityResponse(response) {
    setWeatherData({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feelsLike: "23°C",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: <FontAwesomeIcon icon={faCloudShowersHeavy} />,
    });
  setReady(true);  
  }

  if (ready) {

    return(
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
    <h1 className="text-capitalize city">{wheatherData.city}</h1>
    <div className="date">Friday, 29.02.2021</div>
    <h2 className="time">12:08 pm</h2>

    {/* CITY, DATE & TIME ENDS */}

    {/* MAIN WEATHER INFO START */}
      <div className="row d-flex align-items-center weather">
        <div className="col-sm">
          <ul className="todayWeather">
            <li className="current-icon">{wheatherData.icon}</li>
            {/* <li>
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  className="current-icon"
                  id="current-icon"
                />
              </li> */}

            <li className="text-capitalize description">
              {wheatherData.description}
            </li>
          </ul>
        </div>

        <div className="col-sm">
          <p className="main-temp">
            {wheatherData.temperature}
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
          <ul className="text-left todayHumidityWind">
            <li>
            <FontAwesomeIcon icon={faTemperatureHigh} />
              <span className="extras">Feels like: {wheatherData.feelsLike}°C</span>
            </li>
            <li><FontAwesomeIcon icon={faTint} /><span className="extras-humidity">Humidity: {wheatherData.humidity}%</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} /><span className="extras">Wind: {wheatherData.wind} km/h</span>
            </li>
          </ul>
        </div>
      </div>
      {/* MAIN WEATHER INFO ENDS */}
    </div>
    );
    
  } else {
    let apiKey="7397d5769aa7c8ab77c0945b1e990b7d";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleCityResponse);

   return "Loading"
  }
  
}
