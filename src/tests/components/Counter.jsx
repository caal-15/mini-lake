import React from 'react'

const Counter = ({ counter, addToCounter, setCounter }) => {
  return (
    <div>
      <h1>{counter}</h1>
      <button className="add" onClick={addToCounter}>
        Add
      </button>
      {setCounter ? (
        <button
          className="set"
          onClick={() => {
            setCounter(100)
          }}
        >
          Set to 100
        </button>
      ) : null}
    </div>
  )
}

export default Counter
