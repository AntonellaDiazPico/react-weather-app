import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import "./SearchEngine.css";

export default function SearchEngine() {
  return (
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
  );
}
