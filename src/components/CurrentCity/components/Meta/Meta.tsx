import Humidity from './components/Humidity';
import Wind from './components/Wind';
import AirQuality from './components/AirQuality';
import Somatosensory from './components/Somatosensory';

type MetaProps = {
  currentWeather: {
    [key: string]: any;
  } | null;
}

const Meta = ({currentWeather}: MetaProps) => {
  return (
    <div className='flex gap-1 basis-2/12 flex-auto	'>
      {currentWeather?.list[0] && <Humidity>{currentWeather.list[0].main.humidity}</Humidity>}
      {currentWeather?.list[0] && <Wind>{currentWeather?.list[0].wind.speed}</Wind>}
      {currentWeather?.list[0]?.visibility && <AirQuality>{currentWeather?.list[0]?.visibility}</AirQuality>}
      {currentWeather?.list[0]?.main?.feels_like && <Somatosensory>{currentWeather?.list[0]?.main?.feels_like}</Somatosensory>}
    </div>
  );
}

export default Meta;