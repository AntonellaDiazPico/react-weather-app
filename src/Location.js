import React from "react";
import "./Location.css";

export default function Location(props) {
  return <h1 className="text-capitalize city">{props.location.city}</h1>;
}
