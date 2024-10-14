import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "wonderland",
    feelslike: 24.34,
    temp : 25.05,
    tempMin: 40,
    tempMax: 70,
    humidity: 67,
    weather: "haze",
  });

  let updateInfo = (newInfo) =>{
    // console.log("hai" , newInfo);
    setWeatherInfo(newInfo);
    
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather Info</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info = {weatherInfo}/>
    </div>
  );
}
