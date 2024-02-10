import rain from './assets/Rain.png'
import cloudy_day from './assets/Cloudy_day.png'
import cloudy from './assets/Cloudy.png'
import hail from './assets/Hail.png'
import snow from './assets/Snow.png'
import sunny from './assets/Sunny.png'

type WeatherIconProps = {
  width: 'w-10' | 'w-20' | 'w-28';
}

const WeatherIcon = ({ width }: WeatherIconProps) => {
  return (
    <div>
      <img className={`mx-auto ${width}`} src={rain} alt="WeatherIcon" />
    </div>
  )
}

export default WeatherIcon