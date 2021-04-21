import 'bootstrap/dist/css/bootstrap.min.css';
import SearchEngine from "./SearchEngine.js";
import City from "./City.js";
import Date from "./Date.js";
import Time from "./Time.js";
import CurrentWeather from "./CurrentWeather.js";
import Forecast from "./Forecast.js";
import Footer from "./Footer.js";







import "./Styles.css";
import "./City.css";
import "./Date.css";
import "./Time.css";
import "./CurrentWeather.css";
import "./Footer.css";
import "./Forecast.css";

export default function App() {
  return (
    <div className="App">
      <SearchEngine />
      <City />
      <Date />
      <Time />
      <CurrentWeather />
      <Forecast />
      <Footer />
    </div>
  );
}
