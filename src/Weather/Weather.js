// import React,{useState,useEffect} from 'react'
// import axios from 'axios';
// import "./Weather.css";

// export default function Wheather() {

//     // const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=dallask&appid=65bd18f92e765fea58b2395be99342e2';

//   return (
//     <div className='container'>
//         <h4>Malaysia Current Weather</h4>
//         <div className='location'>
//             <p>Kelate</p>
//         </div>
//         <div className='temperature'>
//             <h4>23 °C</h4>
//         </div>
//         <div className='description'>
//             <h4>Rainy</h4>
//         </div>
//         <div className='bottom'>

//         </div>
//     </div>
//   )
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY_HERE';
    const city = 'New York'; // Replace with the desired city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Weather;
