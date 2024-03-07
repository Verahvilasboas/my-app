import React from "react";
import "./Weather.css";


 export default function Weather(){
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input className="btn btn-primary" type="submit" Search />
            </div>
          </div>
        </form>
        <h2> New York </h2>
        <ul>
          <li>Wednesday 07:20</li>
          <li>Mostly cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/258/075/non_2x/weather-icon-cloudy-sky-icon-free-png.png"
              alt="cloudy"
              width="90px"
            />{" "}
            6°C/F
          </div>
          <div className="col-6">
            <ul>
              <li>Percipitation: 15 % </li>
              <li> Humidity: 72% </li>
              <li> Wind: 13 km/h </li>
            </ul>
          </div>
        </div>
      </div>
    );
 } 