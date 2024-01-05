import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import SearchButton from './Components/SearchButton'
import CityInput from './Components/CityInput'

let key = import.meta.env.VITE_API_KEY


function App() {

  let [city, setCity] = useState("Detroit,MI,USA")
  let [weather, setWeather] = useState(null)
  let [coordinates, setCoordinates] = useState(null)
  let [latitude, setLatitude] = useState(null)
  let [longitude, setLongitude] = useState(null)

  async function getCoordinates() {
      
      try { 
          const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`)
          const data = await response.json()
          console.log(data)
          setLatitude(data[0].lat)
          setLongitude(data[0].lon)         
      } catch(error) {
          console.log(error)
      }
  }

  useEffect(()=>{getCoordinates()}, [])

  async function getWeather() {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${key}`)
      const data = await response.json()
      console.log(data)
  } catch(error) {
    console.log(error.message)
    } 
  }

getWeather()


  return (
    <>
    <CityInput/>
    <SearchButton/>
    </>
  )
}

export default App
