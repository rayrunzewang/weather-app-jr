import rain from './assets/Rain.png'
import cloudy_day from './assets/Cloudy_day.png'
import clouds from './assets/Cloudy.png'
import hail from './assets/Hail.png'
import snow from './assets/Snow.png'
import clear from './assets/Sunny.png'

type WeatherIconProps = {
  width: 'w-10' | 'w-20' | 'w-28';
  icon: string | null;
}

const WeatherIcon = ({ width, icon }: WeatherIconProps) => {
  let iconURL = '';
  switch (icon) {
    case 'clear':
      iconURL = clear;
      break;
    case 'rain':
      iconURL = rain;
      break;
    case 'snow':
      iconURL = snow;
      break;
    case 'hail':
      iconURL = hail;
      break;
    case "clouds":
      iconURL = clouds;
      break;
    case 'cloudy_day':
      iconURL = cloudy_day;
      break;
    default:
      break;
  };
  
  return (
    <div>
      <img className={`mx-auto ${width}`} src={iconURL} alt="WeatherIcon" />
    </div>
  )
}

export default WeatherIcon