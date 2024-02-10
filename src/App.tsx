import { useState } from 'react';
import './styles/App.css';
import './styles/css-reset.css';
import CurrentCity from './components/CurrentCity';
import WeatherForcast from './components/WeatherForcast';
import Searchbar from './components/Searchbar';
import SearchHistory from './components/SearchHistory';
import BackgroundImage from './components/BackgroundImage';

function App() {
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




  return (
    <BackgroundImage>
      <div className="App">
        <h1 className="text-2xl font-bold text-[#fbd1a2] mx-auto ">Weather App</h1>
        <p className="text-xl font-bold text-[#fbd1a2] mx-auto ">WeatherAPI | React | TypeScript | TailWind</p>
        <div className='container w-[800px] h-[400px] bg-[#f1f1fc] mx-auto my-20 grid gap-5 grid-cols-3 grid-rows-8 p-5 rounded-3xl'>
          <CurrentCity></CurrentCity>
          <WeatherForcast></WeatherForcast>
          <Searchbar onSearch={handleSearch}></Searchbar>
          <SearchHistory></SearchHistory>
        </div>
      </div >
    </BackgroundImage>

  );
}

export default App;


