import React, { useState} from "react";
import axios from "axios";

import CityWeatherInfo from "./CityWeatherInfo.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'



export default function WeatherEngine(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleCityResponse(response) {
    setWeatherData({
      dateTime: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
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
    <CityWeatherInfo cityData={weatherData} />

    </div>
    );
    
  } else {
    let apiKey="7397d5769aa7c8ab77c0945b1e990b7d";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleCityResponse);

   return "Loading"
  }
  
}
