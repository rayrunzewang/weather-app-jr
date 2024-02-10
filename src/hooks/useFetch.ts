import { useState } from "react";

export const useFetch = () => {
  const [weather, setWeather] = useState({});

  const handleSearch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${`beijing`},${`cn`}&appid=052b37caae519c28d90953b5a30182ca`)
    .then(response => {
      return response.json()
    })
    .then((response)=>{
      console.log(response)
      setWeather(response)
    })
    .catch(error => {
      console.log(error)
    });
  }

  return {weather, handleSearch}
}