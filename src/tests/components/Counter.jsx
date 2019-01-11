import React from 'react'

const Counter = ({ counter, addToCounter }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addToCounter}>Add</button>
    </div>
  )
}

export default Counter
