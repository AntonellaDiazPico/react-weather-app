import React from "react";

export default function City() {
  let weatherData = {
    city: "Sunshine Coast"
  };
  return <h1 className="text-capitalize City">{weatherData.city}</h1>;
}
