import React from 'react';
import cloudy_icon from '../assets/cloudy.png';
import cloudy_icon_1 from '../assets/cloudy(1).png';
import sun_icon from '../assets/sun.png';
import wind_icon from '../assets/wind.png';
import './weather-card.css';

const WeatherCard = () => {
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='Search' />
        <div className="search-icon">
          <img src='' alt='search icon' />
        </div>
      </div>

      <div className="weather-image">
        <img src={cloudy_icon} alt='weather img'/>
      </div>
      <div className="weather-temp"> 24^C</div>
      <div className='weather-location'>London</div>
      <div className="data-container">
        
      </div>

    </div>
  )
}

export default WeatherCard