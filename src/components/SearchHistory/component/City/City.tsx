import WeatherIcon from '../../../shared/WeatherIcon';
import Name from '../../../shared/Name';
import TemperatureRange from '../../../shared/TemperatureRange';

const City = () => {
  return (
    <div className='basis-1/4 bg-blue-100 rounded-xl overflow-hidden'>
      <WeatherIcon width='w-10'></WeatherIcon>
      <Name>New York</Name>
      <TemperatureRange textColor='text-black'>20 ~ 26</TemperatureRange>
    </div>
  );
}

export default City;