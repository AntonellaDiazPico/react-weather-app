import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'

export default function Forecast() {
  return (
    <div className="row justify-content-center forecast" id="forecast">
      <div className="col-sm">
        <ul>
          <li>Saturday</li>
          <li>
          <FontAwesomeIcon icon={faCloudShowersHeavy} />
          </li>
          <li>16°/13°</li>
        </ul>
      </div>
      <div className="col-sm">
        <ul>
          <li>Sunday</li>
          <li>
          <FontAwesomeIcon icon={faCloudShowersHeavy} />
          </li>
          <li>17°/14°</li>
        </ul>
      </div>
      <div className="col-sm">
        <ul>
          <li>Monday</li>
          <li>
          <FontAwesomeIcon icon={faCloudShowersHeavy} />
          </li>
          <li>13°/10°</li>
        </ul>
      </div>
      <div className="col-sm">
        <ul>
          <li>Tuesday</li>
          <li>
          <FontAwesomeIcon icon={faCloudShowersHeavy} />
          </li>
          <li>11°/7°</li>
        </ul>
      </div>
      <div className="col-sm">
        <ul>
          <li>Wednesday</li>
          <li>
          <FontAwesomeIcon icon={faCloudShowersHeavy} />
          </li>
          <li>18°/12°</li>
        </ul>
      </div>
    </div>
  );
}
