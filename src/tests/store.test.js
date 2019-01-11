import React from 'react'
import { mount } from 'enzyme'

import { Provider, connect } from '../index'
import Counter from './components/Counter'

describe('When connecting a component to the store', () => {
  it('Should make props available to the Component', () => {
    const initialState = { counter: 0 }
    const actions = { addToCounter: jest.fn() }

    const ConnectedComponnent = connect(Counter)

    const App = () => (
      <Provider initialState={initialState} actions={actions}>
        <ConnectedComponnent />
      </Provider>
    )

    const wrapper = mount(<App />)
    const renderedCounter = wrapper.find(Counter)

    expect(renderedCounter).toBeTruthy()
    expect(renderedCounter.prop('counter')).toEqual(0)
    expect(renderedCounter.prop('addToCounter')).toBeInstanceOf(Function)
  })

  it('Updates the state when an action is called', () => {
    const initialState = { counter: 0 }
    const addToCounter = state => {
      const { counter } = state
      return { counter: counter + 1 }
    }
    const actions = { addToCounter: addToCounter }

    const ConnectedComponnent = connect(Counter)

    const App = () => (
      <Provider initialState={initialState} actions={actions}>
        <ConnectedComponnent />
      </Provider>
    )

    const wrapper = mount(<App />)
    let renderedCounter = wrapper.find(Counter)

    expect(renderedCounter).toBeTruthy()
    expect(renderedCounter.prop('counter')).toEqual(0)
    const buttonWrapper = wrapper.find('button')
    buttonWrapper.simulate('click')

    wrapper.update()
    renderedCounter = wrapper.find(Counter)
    expect(renderedCounter.prop('counter')).toEqual(1)
  })
})
