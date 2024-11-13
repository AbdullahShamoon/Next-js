'use client'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Navbar