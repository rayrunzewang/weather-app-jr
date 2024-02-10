import React from 'react'

type NameProps = {
  children: string;
}

const Name = ({children}: NameProps) => {
  return (
    <div>{children}</div>
  )
}

export default Name