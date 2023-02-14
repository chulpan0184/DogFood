/* eslint-disable default-param-last */
import { initState } from '../initState'
import { GET_ALL_PRODUCTS } from '../type'

export const productsReducer = (state = initState.products, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.payload
    default:
      return state
  }
}
