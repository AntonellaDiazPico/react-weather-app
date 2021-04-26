import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherEngine from "./WeatherEngine.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";


import "./App.css";
import "./WeatherEngine.css";
import "./Footer.css";
import "./Forecast.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <WeatherEngine defaultCity="Sunshine Coast" />
      <Forecast />
      <Footer />
      </div>
    </div>
  );
}
