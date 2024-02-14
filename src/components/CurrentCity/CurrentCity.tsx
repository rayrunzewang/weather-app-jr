import CustomDate from './components/CustomDate';
import Name from '../shared/Name';
import Temperature from './components/Temperature';
import TemperatureRange from '../shared/TemperatureRange';
import WeatherIcon from '../shared/WeatherIcon';
import Meta from './components/Meta';
import {currentDate} from '../../utils/CurrentDate';

type CurrentCityProps = {
  currentWeather: {
    [key: string]: any;
  } | null;
}

const CurrentCity = ({ currentWeather }: CurrentCityProps) => {

  return (
    <div className='row-span-8 rounded-2xl bg-blue-100 p-3 flex	flex-col gap-1'>
      {currentWeather?.city?.name && <CustomDate>{currentDate()}</CustomDate>}
      {currentWeather?.city?.name ? <Name>{currentWeather?.city?.name}</Name> : <Name>Please search for a city...</Name>}
      {currentWeather?.list[0]?.main.temp && <Temperature>{currentWeather?.list[0].main.temp}</Temperature>}
      {currentWeather?.list[0] && currentWeather?.list[1] && <TemperatureRange textColor='text-white'>{currentWeather?.list[0]?.main.temp_min + '~' + currentWeather?.list[0]?.main.temp_max}</TemperatureRange>}
      {currentWeather?.list[0]?.weather[0]?.main && <WeatherIcon width='w-28'></WeatherIcon> }
      {currentWeather?.list[0]?.main && <Meta currentWeather={currentWeather}></Meta>}
    </div>  
  );
}

export default CurrentCity;