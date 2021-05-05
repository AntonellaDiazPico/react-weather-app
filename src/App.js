import "bootstrap/dist/css/bootstrap.min.css";
import WeatherEngine from "./WeatherEngine.js";
import Footer from "./Footer.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherEngine defaultCity="Sunshine Coast" />
        <Footer />
      </div>
    </div>
  );
}
