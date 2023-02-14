import { GET_ALL_PRODUCTS } from '../type'

export const getAllProductsAC = (products) => ({
  type: GET_ALL_PRODUCTS,
  payload: products,
})
