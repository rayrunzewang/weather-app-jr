import React from 'react'
import WeatherIcon from '../../../shared/WeatherIcon'
import Name from '../../../shared/Name'
import TemperatureRange from '../../../shared/TemperatureRange'

const City = () => {
  return (
    <div className='basis-1/4 bg-blue-100 rounded-xl overflow-hidden'>
      <WeatherIcon className='w-10 mx-auto'></WeatherIcon>
      <Name></Name>
      <TemperatureRange></TemperatureRange>
    </div>
  )
}

export default City