import { useState } from "react";

export default function CityInput({onCityChange}){

    const [inputCity, setInputCity] = useState('');

    function handleInputChange(e) {
    setInputCity(e.target.value);
    };

    function handleSearchClick() {
    onCityChange(inputCity);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          onCityChange(inputCity);
        }
      };


  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={inputCity}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

