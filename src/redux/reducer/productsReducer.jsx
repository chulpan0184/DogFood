/* eslint-disable default-param-last */
import { initState } from '../initState'
import { DELETE_ALL_PRODUCTS, GET_ALL_PRODUCTS } from '../type'

export const productsReducer = (state = initState.products, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return action.payload

    case DELETE_ALL_PRODUCTS:
      return []

    default:
      return state
  }
}
