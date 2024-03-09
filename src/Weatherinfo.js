import React from "react";
import FormattedDate from "./FormattedData";
import WeatherIcon from "./Weathericon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props){
    return (
      <div className="WeatherInfo">
        <h2 className="text-capitalize"> {props.data.city} </h2>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix ">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
              </div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:{} % </li>
              <li> Humidity: {props.data.humidity}% </li>
              <li> Wind: {props.data.wind} </li>
            </ul>
          </div>
        </div>
      </div>
    );
}