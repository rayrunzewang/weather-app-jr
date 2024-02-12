import { useState } from "react";



// const [currentCity, setCurrentCity] = useState<Object | null>(null);


export const useFetch = (input: string) => {
  const [weather, setWeather] = useState<Object | null>(null);

  const handleSearch = () => {
    if(!input){
      alert('no input data')
    }
    console.log(input)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${input}&appid=052b37caae519c28d90953b5a30182ca`)
      .then(response => {
        return response.json()
      })
      .then((response) => {
        console.log(response)
        setWeather(response)
      })
      .catch(error => {
        console.log(error)
      });
  }

  return { weather, handleSearch }
}