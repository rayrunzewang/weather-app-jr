import React from 'react'

type NameProps = {
  children: string;
}

const Name = ({children}: NameProps) => {
  return (
    <div className='text-2xl text-white'>{children}</div>
  )
}

export default Name