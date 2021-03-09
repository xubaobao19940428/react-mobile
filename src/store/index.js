import {createStore} from  'redux'
import {finalReducer} from './actions'

export const store = createStore(finalReducer)
