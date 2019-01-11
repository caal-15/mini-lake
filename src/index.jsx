import React, { Component, createContext } from 'react'

const Context = createContext()

class Provider extends Component {
  constructor(props) {
    const { actions, initialState } = props

    let wrappedActions = {}

    for (let actionName in actions) {
      wrappedActions[actionName] = this.actionWrapper(actions[actionName])
    }

    this.state = {
      ...initialState,
      ...wrappedActions
    }
  }

  actionWrapper = (action) => {
    this.setState(action(this.state))
  }

  render() {
    const { children } = this.props
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    )
  }
}


const connect = ChildComponent => {
  return props => {
    return (
      <Context.Consumer>
        <ChildComponent {...props} {...store} />
      </Context.Consumer>
    )
  }
}

export default {
  Provider,
  connect
}
