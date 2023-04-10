import { createContext, useContext, useState, useReducer, useRef } from "react"
import P from 'prop-types'
import { reducer } from "./reducer"
import { buildActions } from './build-actions'

export const initialState = {
    counter: 0,
    loading: false
}

const Context = createContext()

export const CounterContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    const actions = useRef(buildActions(dispatch))

    return (
        <Context.Provider value={[ state, actions.current ]}>
            {children}
        </Context.Provider>
    )
}

CounterContextProvider.propTypes = {
    children: P.node.isRequired,
}

export const useCounterContext = () => {
    const context = useContext(Context)

    if (!context) {
        throw new Error('You have to use useCounterContext inside <CounterContextProvider />')
    }

    return [ context[0], context[1] ]
}