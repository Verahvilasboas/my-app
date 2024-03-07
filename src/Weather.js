import React from "react";
import "./Weather.css";
import axios from "axios";

 export default function Weather(){
    const apikey = "3499ef150985eccadd080ff408a018df";
    let city = "London";
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}';
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
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
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix ">
              <img
                src="https://static.vecteezy.com/system/resources/previews/023/258/075/non_2x/weather-icon-cloudy-sky-icon-free-png.png"
                alt="cloudy"
              />
            <span className="temperature"> 6 </span>
            <span className="unit"> °C</span>
            </div>
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