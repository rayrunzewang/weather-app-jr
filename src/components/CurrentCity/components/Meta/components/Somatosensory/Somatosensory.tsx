import React from 'react'

type SomatosensoryProps = {
  children: number;
}

const Somatosensory = ({children}: SomatosensoryProps) => {
  return (
    <div className='basis-1/4 grow'>{children + ' °'}</div>
  )
}

export default Somatosensory