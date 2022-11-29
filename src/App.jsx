import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState() 
  const [temp, setTemp] = useState()

  const success = pos =>{
    setCoords({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    })
  }
  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(()=>{
    if(coords){
      const apiKey=`80c26515e819b35a2ce4bcb25e979ec3`
      const URL= `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)
      .then(res => {
        setWeather(res.data)
        const celsius = (res.data.main.temp-273.15).toFixed(1)
        const farenheit = (celsius * 9/5 + 32).toFixed(1)
        setTemp({celsius, farenheit})
      })
      .catch(err => console.log(err))
    }
  }, [coords])

    console.log(weather)

  return (
    <div className="App">
      <WeatherCard
      weather={weather}
      temp={temp}
      />
    </div>
  )
}

export default App
