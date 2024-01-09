import picture from "./Assets/weather-app.png"

export default function WeatherDisplay({city, state, country, temperature, description, summary, high, low, feelslike, alert}) {
    return (
      <div className = "container">
        <img className = "image" src = {picture} alt = "weather icon"/>
        <h1 className = "city">{city}</h1>
        <h1 id = "currenttemp">{temperature}°F</h1>
        <h3 className = "high-low">H:{high}°F L:{low}°F</h3>
        <h3 className="state-country">{state}, {country}</h3>       
           {temperature !== null && (
                <>
                    <h3>Feels like: {feelslike}°F </h3>
                    <p id = "description">{description}</p> 
                    <p id = "summary">{summary}</p>
                </>
            )}
                  
      </div>
    );
  };