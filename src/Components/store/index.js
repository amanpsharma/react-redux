import {createStore,applyMiddleware} from  'redux'
import thank from 'redux-thunk'
import allReducer from './reducers'

const store = createStore(
    allReducer,
    {},
    applyMiddleware(thank)
)
export default store;