import rain from './assets/Rain.png'
import cloudy_day from './assets/Cloudy_day.png'
import cloudy from './assets/Cloudy.png'
import hail from './assets/Hail.png'
import snow from './assets/Snow.png'
import sunny from './assets/Sunny.png'

interface WeatherIconProps {
  className: string;
}

const WeatherIcon = ({ className }: WeatherIconProps) => {
  return (
    <div>
      <img className={className} src={rain} alt="WeatherIcon" />
    </div>
  )
}

export default WeatherIcon