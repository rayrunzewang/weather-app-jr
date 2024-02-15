import DayInForcast from './components/DayInForcast';
import DateInForcast from './components/DateInForcast';
import WeatherIcon from '../../../shared/WeatherIcon';
import TemperatureRange from '../../../shared/TemperatureRange';

const DayOfWeek = () => {
  return (
    <div className='basis-1/4 bg-blue-100 overflow-hidden	'>
      <DayInForcast></DayInForcast>
      <DateInForcast></DateInForcast>
      <WeatherIcon width='w-20' icon='clear'></WeatherIcon>
      <TemperatureRange textColor='text-black'>20 ~ 26</TemperatureRange>
    </div>
  );
}

export default DayOfWeek;