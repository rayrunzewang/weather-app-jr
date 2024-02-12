import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';
import CurrentCity from './components/CurrentCity';
import WeatherForcast from './components/WeatherForcast';
import Searchbar from './components/Searchbar';
import SearchHistory from './components/SearchHistory';
import BackgroundImage from './components/BackgroundImage';
import './styles/App.css';
import './styles/css-reset.css';

function App() {
  const [city, setCity] = useState('')
  const getInputData = (city:string) => {
    setCity(city);
  }

  const { weather, handleSearch } = useFetch(city)

  return (
    <BackgroundImage>
      <div className="App">
        <h1 className="text-2xl font-bold text-[#fbd1a2] mx-auto ">Weather App</h1>
        <p className="text-xl font-bold text-[#fbd1a2] mx-auto ">WeatherAPI | React | TypeScript | TailWind</p>
        <div className='container w-[800px] h-[400px] bg-[#f1f1fc] mx-auto my-20 grid gap-5 grid-cols-3 grid-rows-8 p-5 rounded-3xl'>
          <CurrentCity currentWeather={weather}></CurrentCity>
          <WeatherForcast></WeatherForcast>
          <Searchbar getInputData={getInputData} onSearch={handleSearch}></Searchbar>
          <SearchHistory></SearchHistory>
        </div>
      </div >
    </BackgroundImage>
  );
}

export default App;


