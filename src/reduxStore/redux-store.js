import {applyMiddleware, combineReducers,  legacy_createStore as createStore} from 'redux' 
import thunk from 'redux-thunk'
import { hotelReducer } from './hotelReducer'
import tourReducer from './tourReducer'
 
let reducers = combineReducers({  
    hotelPage: hotelReducer,
    tourReducer
})
let store = createStore(reducers, applyMiddleware(thunk))   
window.store= store
export default store