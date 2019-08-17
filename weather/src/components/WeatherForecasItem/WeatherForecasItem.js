import React from "react";
import "./WeatherForecasItem.css";

export default function WeatherForecasItem(props) {
  let mainWeatherClassName = props.mainWeather.toLowerCase();

  return (
    <div
      className={`weather_forecast_item col-1 ${mainWeatherClassName}`}
      data-index={props.data_attr}
    >
      <div className="weather_forecast_item_wrap">
        <div className="weather_forecast_date">{/* Погода на */} {props.date}</div>
        <div className="weather_forecast_temp">{/* Температура: */} {props.temp} </div>
        <div className="weather_forecast_pressure">
        {/*  Давление: {props.pressure}{" "} */}
        </div>
        <div className="weather_forecast_humidity">
          {/* Влажность: {props.humidity} %{" "} */}
        </div>
        <div className="weather_forecast_main">
          {/* Общий прогноз: */} {props.mainWeather}
        </div>
        <div className="main_weather_icon" />
      </div>
    </div>
  );
}
