import React, { Component, createContext } from 'react'

const Context = createContext()

export class Provider extends Component {
  constructor(props) {
    super(props)

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

  actionWrapper = action => {
    return (...args) => {
      this.setState(action(this.state, ...args))
    }
  }

  render() {
    const { children } = this.props
    return <Context.Provider value={this.state}>{children}</Context.Provider>
  }
}

export const connect = ChildComponent => {
  return props => {
    return (
      <Context.Consumer>
        {store => <ChildComponent {...props} {...store} />}
      </Context.Consumer>
    )
  }
}
