# Mini Lake

A small copy of waterfall to just to play around with the context API a little more.

# Install

```
npm install mini-lake
```

# Usage

This very simple stores gives you a `Provider` component, and a `connect`
function to wrap your components.

* `Provider` receives two props `initialState` and `actions`.
  * `initalState` is an object representing the initial __state__ of your App.
  * `actions` is an object representing the actions that affect said __state__,
    note that this `actions` must be __pure functions__ that receive the App's
    current __state__ and returns a new object with the whole new __state__.

# Counter Example

```javascript
import React from 'react'
import { Provider, connect } from 'mini-lake'

const Counter = ({ count, addToCount }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addToCount}>Add!</button>
    </div>
  )
}

const ConnectedCounter = connect(Counter)

const initialState = { count: 0 }
const actions = { addToCount: state => ({ count: state.count + 1 }) }

export default App = () => {
  return (
    <Provider initalState={initialState} actions={actions}>
      <Counter />
    </Provider>
  )
}
```

# Running the Tests

Download the repo and in the root folder run: `npm test`.
