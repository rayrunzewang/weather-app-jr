import Date from "./components/Date";
import Name from "../shared/Name";
import Temperature from "./components/Temperature";
import TemperatureRange from "../shared/TemperatureRange";
import WeatherIcon from "../shared/WeatherIcon";
import Meta from "./components/Meta";

type CurrentCityProps = {
  currentWeather: {
    city: string,
    temperature: number,
    temperatureRange: [number, number],
  } | null
}

const CurrentCity = ({ currentWeather }: CurrentCityProps) => {
  return (
    <div className="row-span-8 rounded-2xl bg-blue-100 p-3 flex	flex-col gap-1">
      <Date></Date>
      {currentWeather?.city && <Name>{currentWeather?.city}</Name>}
      {currentWeather?.temperature && <Temperature>{currentWeather?.temperature}</Temperature>}
      {currentWeather?.temperatureRange[0] && currentWeather?.temperatureRange[1] && <TemperatureRange>{currentWeather?.temperatureRange[0] + "~" + currentWeather?.temperatureRange[1]}</TemperatureRange>}
      <WeatherIcon width="w-28"></WeatherIcon>
      <Meta></Meta>
    </div>
  );
}

export default CurrentCity;