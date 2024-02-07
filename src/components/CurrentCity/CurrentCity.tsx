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
    <Name></Name>              
    <Temperature></Temperature>              
    <TemperatureRange></TemperatureRange>              
    <WeatherIcon></WeatherIcon>              
    <Meta></Meta>              
    </div>
  )
}

export default CurrentCity