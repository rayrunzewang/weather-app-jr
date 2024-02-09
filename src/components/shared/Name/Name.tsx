import React from 'react'

interface NameProps {
  children: string;
}

const Name = ({children}: NameProps) => {
  return (
    <div>{children}</div>
  )
}

export default Name