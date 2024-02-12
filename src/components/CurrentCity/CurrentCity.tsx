import Date from "./components/Date";
import Name from "../shared/Name";
import Temperature from "./components/Temperature";
import TemperatureRange from "../shared/TemperatureRange";
import WeatherIcon from "../shared/WeatherIcon";
import Meta from "./components/Meta";

type CurrentCityProps = {
  currentWeather: {
    [key: string]: any;
  } | null
}

const CurrentCity = ({ currentWeather }: CurrentCityProps) => {

  return (
    <div className="row-span-8 rounded-2xl bg-blue-100 p-3 flex	flex-col gap-1">
      <Date></Date>
      {/* {currentWeather?.city?.name && <Name>{currentWeather?.city.name}</Name>}
      {currentWeather?.temperature && <Temperature>{currentWeather?.temperature.list[0].main.temp}</Temperature>}
      {currentWeather?.list[0] && currentWeather?.list[1] && <TemperatureRange>{currentWeather?.list[0].main.temp_min + "~" + currentWeather?.list[0].main.temp_max}</TemperatureRange>}
      <WeatherIcon width="w-28"></WeatherIcon>
      <Meta></Meta> */}
    </div>  
  );
}

export default CurrentCity;