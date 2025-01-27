import "./WeatherForecast.css";

const WeatherForecastItem = ({ forecast }) => {
  return (
    <div className="weather">
      <h2>{forecast.day}</h2>
      <img src={forecast.img} alt={forecast.imgAlt}></img>
      <p>
        <span>conditions: </span>
        {forecast.conditions}
      </p>
      <p>
        <span>time: </span>
        {forecast.time}
      </p>
    </div>
  );
};

export default WeatherForecastItem;
