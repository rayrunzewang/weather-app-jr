import React from 'react'

type TemperatureRangeProps = {
  children: string;
  textColor: string;
}

const TemperatureRange = ({children, textColor}: TemperatureRangeProps) => {
  return (
    <div className={`basis-1/12 flex-auto ${textColor}`}>{children}</div>
  )
}

export default TemperatureRange