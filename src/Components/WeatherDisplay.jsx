export default function WeatherDisplay({city, state, country, temperature, description}) {
    return (
      <div className = "container">
        <div><h1>{city}</h1></div>
        <div><h3>{state}, {country}</h3></div>
        <div><img src = "Components/Assets/weather-app.png" alt = "weather icon"/></div>
            {temperature !== null && (
                <>
                    <h2>Current Temperature: {temperature}°F</h2>
                    <p>Description: {description} </p> 
                </>
            )}      
      </div>
    );
  };