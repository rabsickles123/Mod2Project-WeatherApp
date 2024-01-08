export default function WeatherDisplay({city, state, country, temperature, description}) {
    return (
      <div>
        <h1>{city}</h1>
        <h3>{state}, {country}</h3>
            {temperature !== null && (
                <>
                    <h2>Current Temperature: {temperature}°F</h2>
                    <p>Description: {description} </p> 
                </>
            )}      
      </div>
    );
  };