import React from 'react'

type AirQualityProps = {
  children: number;
}

const AirQuality = ({children}: AirQualityProps) => {
  return (
    <div className=' basis-1/4 grow'>{children}</div>
  )
}

export default AirQuality