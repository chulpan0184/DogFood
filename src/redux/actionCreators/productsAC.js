import { DELETE_ALL_PRODUCTS, GET_ALL_PRODUCTS } from '../type'

export const getAllProductsAC = (products) => ({
  type: GET_ALL_PRODUCTS,
  payload: products,
})

export const deleteProductsAC = (products) => ({
  type: DELETE_ALL_PRODUCTS,
  payload: products,
})
