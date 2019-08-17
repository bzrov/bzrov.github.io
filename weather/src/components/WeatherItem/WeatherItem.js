import React from "react";
import WeatherForecasItem from "../WeatherForecasItem/WeatherForecasItem";


import "./WeatherItem.css";

export default function WeatherItem(props) {
  let mainWeatherClassName = props.mainWeather.toLowerCase();
  const city = props.name;

  return (
    <div>
      <div className="row border-t-none">
        <div
          className={`weather_item col col-2 ${mainWeatherClassName}`}
          data-index={props.data_attr}
        >
          <div className="weather_item_wrap">
            <div className="row border-none">
              <div className="col-2 weather_secondary_info">
                <div className="weather_city"> {props.name} </div>

                <div className="weather_pressure">
                  Давление: {props.pressure}{" "}
                </div>
                <div className="weather_humidity">
                  Влажность: {props.humidity} %{" "}
                </div>
              </div>
              <div className="col-2 border-r-none weather_main">
                <div className="main_weather_icon" />
                {props.mainWeather}
                <div className="weather_temp">{props.temp} </div>
              </div>
            </div>
          </div>
        </div>
        <div className="weather_link_forecast col col-2 ">
          <div className="weather_link_forecast_wrapper">
            <div className="link_more" data-index={props.data_attr} onClick={(e)=> props.onWeatherForecastClick(e)}>узнать прогноз</div>
          </div>
        </div>
      </div>
      {props.isWeatherForecastOpened && (
        <div className="weather_forecast">
          City : {city}
          <div className="weather_forecast_list">
            
              {props.weatherForecast.map((el, index) => (
                <WeatherForecasItem
                  temp={el.temp}
                  pressure={el.pressure}
                  key={index}
                  data_attr={index}
                  humidity={el.humidity}
                  date={el.date}
                  mainWeather={el.mainWeather}
                  descriptionWeather={el.descriptionWeather}
                />
              ))}
            
          </div>
        </div>
      )}
    </div>
  );
}
