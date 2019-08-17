import React from "react";
import "./WeatherForm.css";
export default function WeatherForm(props) {
  return (
    <div className="row form_city_weather">
      <div className="col col-1 input_city">
        <div className="input_city_wrapper">
          <input
            className="input input_text"
            onChange={props.onWeatherInputChange}
            type="text"
            placeholder="введите город"
          />
        </div>
      </div>
      <div className="col col-1 input_submit_city">
        <div className="input_submit_city_wrapper">
          <input
            className="input input_submit"
            onClick={props.onWeatherBtnClick}
            value="узнать погоду"
            type="submit"
          />
        </div>
      </div>
      <div className="col-2 border-r-none" />
    </div>
  );
}
