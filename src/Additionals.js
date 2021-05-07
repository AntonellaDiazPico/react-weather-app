import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export default function Additionals(props) {
    return (
        <div>
            <ul className="text-left todayHumidityWind">
            <li>
              <FontAwesomeIcon icon={faTemperatureHigh} />
              <span className="extras">
                Feels like: {props.feelsLike}°C
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faTint} />
              <span className="extras-humidity">
                Humidity: {props.humidity}%
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faWind} />
              <span className="extras">Wind: {props.wind} km/h</span>
            </li>
          </ul>
        </div>
    );
}