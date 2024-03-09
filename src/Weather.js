import React, { useState } from "react";
import Weatherinfo from "./Weatherinfo";
import "./Weather.css";
import axios from "axios";


export default function Weather(props) {
 //2
 //8 deleted : const [ready, setReady]= useState(false);
 //6 i changed from temperature to weather in general
  const [weatherData, setweatherData] = useState({ready:false});
  // 1st 

 // at the end when you want to put search appearing
const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    //7 connect woth new const
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
 //3 
 // deleted   setTemperature(response.data.main.temp);
   // deteleted at the end : setReady(true);



//after next one
function search (){
//city
const apiKey = "3499ef150985eccadd080ff408a018df";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

// after creating  Winfo, W formatted components

  function handleSubmit(event) {
    event.preventDefault();
    search();
  
//search for a city 
}

  function handleCityChange(event) {
    setCity(event.target.value);
  }

//4
  if (weatherData.ready){
 return (
   <div className="Weather">
     <form onSubmit={handleSubmit}>
       <div className="row">
         <div className="col-9">
           <input
             type="Search"
             placeholder="Enter a city"
             className="form-control"
             autoFocus="on"
             onChange={handleCityChange}
           />
         </div>
         <div className="col-3">
           <input className="btn btn-primary" type="submit" Search />
         </div>
       </div>
     </form>
     <Weatherinfo data={weatherData} />
   </div>
 );

//5
  } else {
search();
return "Loading..."
  }
}
