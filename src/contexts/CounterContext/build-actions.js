import { useCallback } from 'react'
import * as actionTypes from './action-types'

export const buildActions = (dispatch) => {
    return {
        increase() {
            return dispatch({ type: actionTypes.INCREASE })
        },

        decrease() {
            return dispatch({ type: actionTypes.DECREASE })
        },

        reset() {
            return dispatch({ type: actionTypes.RESET })
        },

        setCounter(payload) {
            return dispatch({ type: actionTypes.SET_COUNTER, payload })
        },

        asyncIncrease() {
            return asyncIncreaseFn(dispatch)
        },

        asyncError() {
            return asyncErrorFn(dispatch)
        }

    }
}

const asyncIncreaseFn = async (dispatch) => {
    dispatch({ type: actionTypes.ASYNC_INCREASE_START })

    return await new Promise(resolve => {
        setTimeout(() => {
            dispatch({ type: actionTypes.ASYNC_INCREASE_END })
            resolve('RESOLVED!')
        }, 3000)
    })
}

const asyncErrorFn = async (dispatch) => {
    dispatch({ type: actionTypes.ASYNC_INCREASE_START })

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch({ type: actionTypes.ASYNC_INCREASE_ERROR })
            reject(new Error('Deu ruim'))
        }, 3000)
    })
}