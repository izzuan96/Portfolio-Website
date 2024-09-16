import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityInput, setCityInput] = useState('');
  const [loading, setLoading] = useState(false);


  async function fetchWeatherData() {   
    if (!cityInput) return;

    setLoading(true);

  
  try{
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
    
    const response = await axios.get(apiUrl);
    setWeatherData(response.data);
  } catch (error) {
    console.error('Error fecthing data: ', error);
  } finally{
    setLoading(false);
  }
}
    const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

    return (
    <div className='weatherWrap'>
    <div className='searchBarContainer'>
        <form onSubmit={handleSubmit}>
        <div className='formWrap'>
            <div className='searchField input-group'>
                <input 
                    className=' text-white bg-dark'
                    type="text"
                    placeholder="Enter city name"
                    value={cityInput}
                    onChange={(event) => setCityInput(event.target.value)}
                />
                <button className='weatherBtn btn btn-outline-dark' type="submit"><i class="bi bi-search"></i></button>
            </div>
        </div>
        </form>
    </div>
    
          {loading ? (
            <p>Loading weather data...</p>
          ) : weatherData ? (
            <div className='wrapDesc'>
                <div className='WeatherTitle'>
                    <h4>Weather in {weatherData.name}</h4>
                </div>
                <div className='WeathertitleDesc'>  
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Humidty: {weatherData.main.humidity}%</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Wind: {weatherData.wind.speed} km/h</p>
                </div>
            </div>
          ) : (
            <p>Enter a city name to fetch weather data.</p>
          )}
    </div>
    );
    }
    
    export default Weather;