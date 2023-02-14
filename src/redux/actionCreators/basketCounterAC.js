import { CLEAR_COUNTER, COUNTER_DECREMENT, COUNTER_INCREMENT } from '../type'

export const basketDecrementAC = () => ({
  type: COUNTER_DECREMENT,
})

export const basketIncrementAC = () => ({
  type: COUNTER_INCREMENT,
})

export const clearCounterAC = () => ({
  type: CLEAR_COUNTER,
})
