import Name from './components/Name'
import Date from './components/Date'
import WeatherIcon from './components/WeatherIcon'
import TemperatureRange from './components/TemperatureRange'

const DayOfWeek = () => {
  return (
    <div className='basis-1/4 bg-blue-100 overflow-hidden	'>
      <Name></Name>
      <Date></Date>
      <WeatherIcon></WeatherIcon>
      <TemperatureRange></TemperatureRange>
    </div>
  )
}

export default DayOfWeek