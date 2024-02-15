import DayOfWeek from "./components/DayOfWeek";

type WeatherForcastProps = {
  weatherForcast: {
    [key: string]: any;
  } | null;
};
const WeatherForcast = ({ weatherForcast }: WeatherForcastProps) => {
  return (
    <div className="row-span-5 col-span-2 rounded-2xl	flex gap-3">
      <DayOfWeek></DayOfWeek>
      <DayOfWeek></DayOfWeek>
      <DayOfWeek></DayOfWeek>
      <DayOfWeek></DayOfWeek>
    </div>
  )
}

export default WeatherForcast