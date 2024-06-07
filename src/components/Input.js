import React, { useState } from 'react'

const Input = () => {

    const [value, setValue] = useState(0)
  return (
    <input type='number' value={value} />
  )
}

export default Input