import React from 'react'
import { useState } from 'react';

type InputProps = {
  getInputData: (query: string) => void;
}

const Input = ({ getInputData }: InputProps) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput(e.target.value);
    getInputData(e.target.value);
  }

  return (
    <input
      value={input}
      onChange={handleInputChange}
      className=' w-full' />
  )
}

export default Input