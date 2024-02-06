import React from 'react'
import Humidity from './components/Humidity'
import Wind from './components/Wind'
import AirQuality from './components/AirQuality'
import Somatosensory from './components/Somatosensory'

const Meta = () => {
  return (
    <div className='flex gap-1 basis-2/12 flex-auto	'>
      <Humidity></Humidity>
      <Wind></Wind>
      <AirQuality></AirQuality>
      <Somatosensory></Somatosensory>
    </div>
  )
}

export default Meta