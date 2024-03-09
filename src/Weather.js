import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedData";

export default function Weather(props) {
 //2
 //8 deleted : const [ready, setReady]= useState(false);
 //6 i changed from temperature to weather in general
  const [weatherData, setweatherData] = useState({ready:false});
  // 1st 


  function handleResponse(response) {
    console.log(response.data);
    //7 connect woth new const
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl:
        "https://static.vecteezy.com/system/resources/previews/023/258/075/non_2x/weather-icon-cloudy-sky-icon-free-png.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    console.log(response.data);
  }
 //3 
 // deleted   setTemperature(response.data.main.temp);
   // deteleted at the end : setReady(true);

//4
  if (weatherData.ready){
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
     <h2 className="text-capitalize"> {weatherData.city} </h2>
     <ul>
       <li> <FormattedDate date={weatherData.date} />
       </li>
       <li className="text-capitalize">
         {weatherData.description}
       </li>
     </ul>
     <div className="row mt-3">
       <div className="col-6">
         <div className="clearfix ">
           <img
             src={weatherData.iconUrl}
             alt={weatherData.description}
             className="float-left"
           />
           <span className="temperature">
             {" "}
             {Math.round(weatherData.temperature)}{" "}
           </span>
           <span className="unit"> °C</span>
         </div>
       </div>
       <div className="col-6">
         <ul>
           <li>Percipitation: {} % </li>
           <li> Humidity: {weatherData.humidity}% </li>
           <li> Wind: {weatherData.wind} </li>
         </ul>
       </div>
     </div>
   </div>
 );

//5
  } else {
const apiKey = "3499ef150985eccadd080ff408a018df";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading..."
  }
}
