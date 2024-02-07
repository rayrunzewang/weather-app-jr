import DayOfWeek from "./components/DayOfWeek"

const WeatherForcast = () => {
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