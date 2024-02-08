import Day from './components/Day'
import Date from './components/Date'
import WeatherIcon from '../../../shared/WeatherIcon'
import TemperatureRange from '../../../shared/TemperatureRange'

const DayOfWeek = () => {
  return (
    <div className='basis-1/4 bg-blue-100 overflow-hidden	'>
      <Day></Day>
      <Date></Date>
      <WeatherIcon className="w-20 mx-auto"></WeatherIcon>
      <TemperatureRange></TemperatureRange>
    </div>
  )
}

export default DayOfWeek