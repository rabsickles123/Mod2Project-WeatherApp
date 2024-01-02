import { useState } from "react";

let key = import.meta.env.VITE_API_KEY 

export default function WeatherData() {
    let [weather, setWeather] = useState([])

    async function getData(e) {
        e.preventDefault()

        try { 

            const response = await fetch(`http://api.weatherstack.com/current?access_key=${key}&query=New York`)
            const data = await response.json()
            console.log(data)
            
        } catch(error) {
            console.log(error.info)
        }
    }

  return (

    <div>WeatherData</div>
  )
}