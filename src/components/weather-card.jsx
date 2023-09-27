import React, { useEffect, useState } from 'react';
import cloudy_icon from '../assets/cloudy.png';
import cloudy_icon_1 from '../assets/cloudy(1).png';
import sun_icon from '../assets/sun.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';
import Search from './search/search';
import TemperatureElement from './elements/temperature-element';
import './weather-card.css';
import fetchWeather from '../API/fetchWeather';

const WeatherCard = () => {
  const [weather, setWeather] = useState('');
  const temperature = weather?.main?.temp;
  const windSpeed = weather?.wind?.speed;
  const humidity = weather?.main?.humidity;

  const handleWeather = (weather) => {
    setWeather(weather);
  }

  useEffect(()=>{
    fetchWeather('Kochi')
    .then((response) => {
      setWeather(response);
    })
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <div className='container'>
      <Search handleWeather={handleWeather}/>
      
      <div className="weather-icon">
        <img src={cloudy_icon} alt='weather img' />
      </div>
      <p className="weather-temp">{Math.round(temperature)} ℃</p>
      <p className='weather-location'>{weather.name}</p>

      <div className="data-container">
        <TemperatureElement icon={wind_icon} value={windSpeed} element={'Windspeed'} />
        <TemperatureElement icon={humidity_icon} value={humidity} element={'Humidity'} />
      </div>

    </div>
  )
}

export default WeatherCard