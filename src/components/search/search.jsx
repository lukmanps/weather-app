import React, { useState } from 'react';
import search_icon from '../../assets/search.png';
import '../weather-card.css';
import fetchWeather from '../../API/fetchWeather';

const Search = ({handleWeather}) => {

    const [search, setSearch] = useState('');

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    }

    async function handleFetchWeather(){
        if(search === ''){
            return null;
        } else {
            fetchWeather(search)
            .then((response) => {
                handleWeather(response);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <div className='top-bar'>
            <input 
            type='text' 
            placeholder='Search' 
            onChange={handleSearchInput} />

            <div className="search-icon" onClick={handleFetchWeather}>
                <img src={search_icon} alt='search icon' height={'30px'}/>
            </div>
        </div>
    )
}

export default Search;