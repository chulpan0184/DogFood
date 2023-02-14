import { createStore } from 'redux'
import { initState } from './initState'
import { rootReducer } from './reducer/rootReducer'

export const store = createStore(rootReducer, initState)
