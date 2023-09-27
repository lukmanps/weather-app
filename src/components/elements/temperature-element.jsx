import React from 'react';
import '../weather-card.css';

const TemperatureElement = ({ icon, value, element }) => {
    return (
        <div className="element">
            <img src={icon} alt="Humidity" height={'70px'} />
            <div className="data">
                {element === 'Windspeed' ? (
                    <div>
                        <p className='text-head'>{value} km/hr</p>
                        <p>{element}</p>
                    </div>)
                    : (
                    <div>
                        <p className='text-head'>{value} %</p>
                        <p>{element}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TemperatureElement;