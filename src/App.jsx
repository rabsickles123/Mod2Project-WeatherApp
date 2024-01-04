import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import SearchButton from './Components/SearchButton'
import CityInput from './Components/CityInput'

let key = import.meta.env.VITE_API_KEY


function App() {

  let [weather, setWeather] = useState(null)

  async function getData() {
      
      try { 
          const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Detroit,MI,USA&limit=5&appid=${key}`)
          const data = await response.json()
          console.log(data)
          setWeather(data)
          
      } catch(error) {
          console.log(error)
      }
  }

  useEffect(()=>{getData()},[] )


  return (
    <>
    <CityInput/>
    <SearchButton/>
    </>
  )
}

export default App
