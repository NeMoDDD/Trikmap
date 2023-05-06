import {applyMiddleware, combineReducers,  legacy_createStore as createStore} from 'redux' 
import thunk from 'redux-thunk'
import { hotelReducer } from './hotelReducer'
let reducers = combineReducers({  
    hotelPage: hotelReducer
})
let store = createStore(reducers, applyMiddleware(thunk))   
console.log(store.getState().hotelPage.hotels)
window.store= store
export default store