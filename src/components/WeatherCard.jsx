import React, { useState } from 'react'

const weatherCard = ({weather, temp}) => {
    
    const [isCelsius, setisCelsius] = useState(true)
    const handleClick = () =>setisCelsius(!isCelsius)

    return (
    <article className='card'> 
        <header className='card__header'>
            <h1 className='card__title'>weather App</h1>
            <h2 className='card__subtitle'>{weather?.name}, {weather?.sys.country}</h2>

        </header>
        <section>
            <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png
            `} alt="" />
            
        </section>

        <section className='card__info'>
            <h3>"{weather?.weather[0].description}"</h3>
            <ul>
                <li className='card__item'>
                    <span className='card__span'>Wind Speed:</span>{weather?.wind.speed}m/s
                    </li>
                <li className='card__item'>
                    <span className='card__span'>Clouds:</span>{weather?.clouds.all}%
                    </li>
                <li className='card__item'>
                    <span className='card__span'>Pressure:</span>{weather?.main.pressure}hPa
                    </li>
            </ul>
        </section>

        <h3 className='card__temp'>
                {
                    isCelsius ?
                    `${temp?.celsius}°C`
                    :
                    `${temp?.farenheit}°F`
                }  
        </h3>

        <footer className='card__footer'>
            <button onClick={handleClick} className='card__btn'>Change to {isCelsius ? '°F' : '°C' }</button>
        </footer>
    </article>
  )
}

export default weatherCard