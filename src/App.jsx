import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import SearchButton from './Components/SearchButton'
import CityInput from './Components/CityInput'

let key = import.meta.env.VITE_API_KEY


function App() {

  let [city, setCity] = useState(null)
  let [weather, setWeather] = useState(null)
  let [coordinates, setCoordinates] = useState(null)
  let [latitude, setLatitude] = useState(null)
  let [longitude, setLongitude] = useState(null)

  async function getCoordinates() {
      
      try { 
          const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Detroit,MI,USA&limit=5&appid=${key}`)
          const data = await response.json()
          console.log(data)
          console.log(data[0].lat)
          console.log(data[0].lon)
          setLatitude(data[0].lat)
          setLongitude(data[0].lon)         
      } catch(error) {
          console.log(error)
      }
  }

  useEffect(()=>{getCoordinates()}, [])


  return (
    <>
    <CityInput/>
    <SearchButton/>
    </>
  )
}

export default App
