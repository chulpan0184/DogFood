/* eslint-disable default-param-last */
import { initState } from '../initState'
import { CLEAR_COUNTER, COUNTER_DECREMENT, COUNTER_INCREMENT } from '../type'

export const basketCounterReducer = (state = initState.basketCounter, action) => {
  switch (action.type) {
    case COUNTER_DECREMENT:
      return state - 1

    case COUNTER_INCREMENT:
      return state + 1

    case CLEAR_COUNTER:
      return 0
    default:
      return state
  }
}
