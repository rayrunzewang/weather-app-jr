import Date from "./components/Date"
import Name from "../shared/Name"
import Temperature from "./components/Temperature"
import TemperatureRange from "../shared/TemperatureRange"
import WeatherIcon from "../shared/WeatherIcon"
import Meta from "./components/Meta"

const CurrentCity = () => {
  return (
    <div className="row-span-8 rounded-2xl bg-blue-100 p-3 flex	flex-col gap-1">
    <Date></Date>
    <Name>New York</Name>              
    <Temperature></Temperature>              
    <TemperatureRange>20 ~ 26</TemperatureRange>              
    <WeatherIcon className="w-28 mx-auto"></WeatherIcon>              
    <Meta></Meta>              
    </div>
  )
}

export default CurrentCity