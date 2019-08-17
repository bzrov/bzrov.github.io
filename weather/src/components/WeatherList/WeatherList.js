import React, { useContext, useState  } from "react";
import WeatherItem from "../WeatherItem/WeatherItem";

import { MyWeatherContext } from "../Main/Main";
import "./WeatherList.css";

export default function WeatherList() {
  const { weather,onWeatherForecastClick} = useContext(MyWeatherContext);
  

  return (
    <div className="weather_list">
      <div className="row weather_list_title">
        <div className="col col-1 weather_list_title_item">
          Погода
      </div>
        <div className="col col-1 weather_list_title_item">
          Дополнительная информация
      </div>
        <div className="col-2 border-r-none" />
      </div>
      {weather.map((el, index) => (
        <WeatherItem
          name={el.cityName}
          temp={el.temp}
          pressure={el.pressure}
          key={index}
          data_attr={index}
          humidity={el.humidity}
          mainWeather={el.mainWeather}
          descriptionWeather={el.descriptionWeather}
          weatherForecast={el.weatherForecast}
          onWeatherForecastClick={(e)=> onWeatherForecastClick(e)}
          isWeatherForecastOpened={el.isWeatherForecastOpened}
        />
      ))}
    </div>
  );
}
