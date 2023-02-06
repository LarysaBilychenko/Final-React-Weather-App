import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ load: false });

  let city = `Kyiv`;

  function showTemperature(response) {
    console.log(response.data);
    setWeatherData({
      load: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      date: "Wednesday, 7:00",
    });
  }

  if (weatherData.load) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-sm-9">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Enter a city..."
                  autoFocus="on"
                />
              </div>
              <div className="col-sm-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <h1>{city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-sm-3">
            <img
              src={weatherData.icon_url}
              alt={weatherData.description}
              className="float-start"
            />
          </div>
          <div className="col-sm-3">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>

          <div className="col-sm-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `3af0ace7e53bde08dtbd8a6b4o60a6d7`;

    let apiUrl = `
https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showTemperature);
    return `Weather App is loading...`;
  }
}
