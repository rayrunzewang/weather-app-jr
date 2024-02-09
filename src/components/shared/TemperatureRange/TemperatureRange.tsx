import React from 'react'

interface TemperatureRangeProps {
  children: string;
}

const TemperatureRange = ({children}: TemperatureRangeProps) => {
  return (
    <div className='basis-1/12 flex-auto'>{children}</div>
  )
}

export default TemperatureRange