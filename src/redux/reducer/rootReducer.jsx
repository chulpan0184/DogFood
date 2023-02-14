import { combineReducers } from 'redux'
import { basketCounterReducer } from './basketCounterReduser'
import { productsReducer } from './productsReducer'

export const rootReducer = combineReducers({
  products: productsReducer,
  basketCounter: basketCounterReducer,
})
