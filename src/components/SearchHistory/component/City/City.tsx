import React from 'react'
import WeatherIcon from './components/WeatherIcon'
import Name from './components/Name'
import TemperatureRange from './components/TemperatureRange'

const City = () => {
  return (
    <div className='basis-1/4 bg-blue-100 rounded-xl overflow-hidden'>
      <WeatherIcon></WeatherIcon>
      <Name></Name>
      <TemperatureRange></TemperatureRange>
    </div>
  )
}

export default City