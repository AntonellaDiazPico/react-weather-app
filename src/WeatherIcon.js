import React from "react";
import { WiDaySunny } from "weather-icons-react";
import { WiNightClear } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiNightCloudy } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
import { WiDayShowers } from "weather-icons-react";
import { WiNightShowers } from "weather-icons-react";
import { WiDayRain } from "weather-icons-react";
import { WiNightRain } from "weather-icons-react";
import { WiDayThunderstorm } from "weather-icons-react";
import { WiNightThunderstorm } from "weather-icons-react";
import { WiDaySnow } from "weather-icons-react";
import { WiNightSnow } from "weather-icons-react";
import { WiFog } from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": <WiDaySunny />,
    "01n": <WiNightClear />,
    "02d": <WiDayCloudy />,
    "02n": <WiNightCloudy />,
    "03d": <WiCloud />,
    "03n": <WiCloud />,
    "04d": <WiCloudy />,
    "04n": <WiCloudy />,
    "09d": <WiDayShowers />,
    "09n": <WiNightShowers />,
    "10d": <WiDayRain />,
    "10n": <WiNightRain />,
    "11d": <WiDayThunderstorm />,
    "11n": <WiNightThunderstorm />,
    "13d": <WiDaySnow />,
    "13n": <WiNightSnow />,
    "50d": <WiFog />,
    "50n": <WiFog />
  }

  return (
    <div>{codeMapping[props.iconCode]}</div>);
}
