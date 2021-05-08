import React, { useState } from "react";
import axios from "axios";
import Location from "./Location";
import FormattedDate from "./FormattedDate";
import CityWeatherInfo from "./CityWeatherInfo";
import Forecast from "./Forecast";
import "./WeatherEngine.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";

export default function WeatherEngine(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleCityResponse(response) {
    setWeatherData({
      dateTime: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
    setReady(true);
  }

  function searchGenerator() {
    let apiKey = "7397d5769aa7c8ab77c0945b1e990b7d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleCityResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    searchGenerator();
  }

  function getGeolocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "7397d5769aa7c8ab77c0945b1e990b7d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleCityResponse);
  }

  function handleGeolocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getGeolocation);
  }

  if (ready) {
    return (
      <div className="WeatherEngine">
        {/* SEARCH ENGINE BEGINS */}
        <div className="SearchEngine">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <form className="searchBar" onSubmit={handleFormSubmit}>
                <input
                  className="citySearch"
                  type="text"
                  placeholder="Where to today?"
                  autoComplete="off"
                  onChange={handleCityChange}
                />
              </form>
              <button className="location-btn" onClick={handleGeolocation}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </button>
            </div>
          </div>
        </div>
        {/* SEARCH ENGINE ENDS */}
        <Location location={weatherData} />
        <FormattedDate date={weatherData.dateTime} />
        <CityWeatherInfo cityData={weatherData} unit={unit} setUnit={setUnit} />
        <Forecast coordinates={weatherData.coordinates} unit={unit}/>
      </div>
    );
  } else {
    searchGenerator();
    return (
      <div className="loader">
        <Loader
          type="ThreeDots"
          color="rgb(250, 240, 108)"
          height={100}
          width={100}
        />
      </div>
    );
  }
}
