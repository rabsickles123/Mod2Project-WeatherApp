export default function WeatherDisplay({city, temperature, description}) {
    return (
      <div>
        <h1>{city}</h1>
            {temperature !== null && (
                <>
                    <h2>Current Temperature: {temperature}°F</h2>
                    <p>Description: {description} </p> 
                </>
            )}      
      </div>
    );
  };