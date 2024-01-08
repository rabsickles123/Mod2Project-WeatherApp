import { useState } from 'react';

const CityInput = ({ onCityChange }) => {
  const [cityInput, setCityInput] = useState('');

  function handleInputChange(event) {
    setCityInput(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    onCityChange(cityInput);
    setCityInput(''); 
  };

  return (
    <div className = "input-bar">
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityInput}
        onChange= {handleInputChange}/>
     <button type="submit">Get Weather</button>
    </form>
    </div>
  );
};

export default CityInput;
