import React, { useState, useEffect } from "react";

import WeatherList from "../WeatherList/WeatherList";
import WeatherForm from "../WeatherForm/WeatherForm";

import LeafMap from "../LeafMap/LeafMap";

export const MyWeatherContext = React.createContext();

const weather_api_key = "e2bc6a595e6ee4928ed91c3778b2b446";

export default function Main() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [status, setStatus] = useState("");
  const [mapCoordinates, setMapCoordinates] = useState([]);
  const [isWeatherForecastOpened, setWeatherForecastOpened] = useState(false)


  const weatherForecastOpen = (e) => {
    const newWeather = weather.slice();
    const index = e.currentTarget.dataset.index;
    newWeather[index].isWeatherForecastOpened = true;

    return setWeather(newWeather)

  }




  useEffect(() => {
    mapCoordinates[0] &&
      mapCoordinates[1] &&
      getWeatherByCoordinates(mapCoordinates);
  }, [mapCoordinates]);

  /*Главный парсер погоды принимает 2 объекта: основную погоду и прогноз погоды на 5 дней */

  const parse = (data_weather, parsed_weather_forecast) => {

    /*устанавливает код(ошибки или успеха) */
    setStatus(data_weather.cod);

    const newWeather = weather.slice();

    if (data_weather.cod === 200) {
      let cityIdArr = newWeather.map(function (el) {
        return el.id;
      });
      cityIdArr.forEach((item, idx) => {
        if (item === data_weather.id) {
          newWeather.splice(idx, 1);
        }
      });

      newWeather.unshift({
        id: data_weather.id,
        cityName: data_weather.name,
        temp: data_weather.main.temp,
        pressure: data_weather.main.pressure,
        humidity: data_weather.main.humidity,
        mainWeather: data_weather.weather[0].main,
        descriptionWeather: data_weather.weather[0].description,
        weatherForecast: parsed_weather_forecast,
        isWeatherForecastOpened: isWeatherForecastOpened
      });
    }
    return newWeather;
  };

  const parseForecast = data_weatheForecast => {
    const newWeatherForecast = [];
    if (data_weatheForecast.cod === "200") {
      data_weatheForecast.list.map(forecast => {
        newWeatherForecast.push({
          temp: forecast.main.temp,
          pressure: forecast.main.pressure,
          humidity: forecast.main.humidity,
          date: forecast.dt_txt,
          mainWeather: forecast.weather[0].main,
          descriptionWeather: forecast.weather[0].description,
          isWeatherForecastOpened: false
        });
      });
    }
    return newWeatherForecast
  };


  const getWeatherByCity = async city => {

    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&lang=ru&units=metric`
    );
    const data_weather = await api_url.json();

    const api_url_forecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weather_api_key}&lang=ru&units=metric`
    );

    const data_weather_forecast = await api_url_forecast.json();

    const parsed_weather_forecast = parseForecast(data_weather_forecast)
    const parsed_weather = parse(data_weather, parsed_weather_forecast);

    return setWeather(parsed_weather)
  };


  const getWeatherByCoordinates = async coord => {

    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coord[0]}&lon=${
      coord[1]
      }&appid=${weather_api_key}&lang=ru&units=metric`
    );
    const data_weather = await api_url.json();

    const api_url_forecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coord[0]}&lon=${
      coord[1]
      }&appid=${weather_api_key}&lang=ru&units=metric`
    );
    const data_weather_forecast = await api_url_forecast.json();

    const parsed_weather_forecast = parseForecast(data_weather_forecast)
    const parsed_weather = parse(data_weather, parsed_weather_forecast);

    return setWeather(parsed_weather);
  };

  const getMapCoordinates = e => {
    const { lat, lng } = e.latlng;
    return setMapCoordinates([lat, lng]);
  };



  const context = {
    weather: weather,
    parse: parse,
    getWeatherByCity: getWeatherByCity,
    getMapCoordinates: getMapCoordinates,
    onWeatherForecastClick: weatherForecastOpen,

  };

  return (
    <div className="wrapper">
      <MyWeatherContext.Provider value={context}>
        <section className="row">
          <div className="col col-3">
            <LeafMap getMapPosition={e => getMapCoordinates(e)} />
          </div>
          <div className="col col-1 col-border-r-none">
            <p>Карта</p>
          </div>
        </section>

        <WeatherForm
          onWeatherInputChange={e => {
            setCity(e.target.value);
          }}
          onWeatherBtnClick={() => getWeatherByCity(city)}
        />
        <div className="status">
          {status === "404"
            ? "Ошибка, такого города не существует, введите сущетсвующий город или найдите его на карте"
            : ""}
        </div>
        <WeatherList />
      </MyWeatherContext.Provider>
    </div>
  );
}
