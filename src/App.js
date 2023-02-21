import React, {useState} from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");
  const increaseTemp = () =>{
  const newTemp = temperatureValue + 1;

    if(newTemp >= 15){
      setTemperatureColor('yellow');
    }
    setTemperatureValue (newTemp);
  };
  const decreaseTemp = () =>{
    const newTemp = temperatureValue - 1;

    if(newTemp < 15){
      setTemperatureColor('cold');
    }
    setTemperatureValue (newTemp);
  };

  return(
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={() => decreaseTemp()}>-</button>
        <button onClick={() => increaseTemp()}>+</button>        
      </div>
    </div>
  )
}

export default App;