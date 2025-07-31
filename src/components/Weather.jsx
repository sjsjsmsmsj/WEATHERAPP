import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import { useEffect } from 'react';

const Weather = () => {

    const search = async (city) => {
        const API_KEY = import.meta.env.VITE_APP_ID;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        search("London");
    }, []);

    return (
        <div className='weather'>
            <div className="search-bar">
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="" />
            </div>

            <img src={clear_icon} alt="" className='weather-icon' />
            <p className='temperature'>16°C</p>
            <p className='location'>Việt Nam</p>
            <div className="weather-data">
                <div className="col">
                    <img src={humidity_icon} alt="" />
                    <div>
                        <p>91%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={wind_icon} alt="" />
                    <div>
                        <p>3.6 km/h</p>
                        <span>Wind</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather