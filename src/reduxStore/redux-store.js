import {applyMiddleware, combineReducers,  legacy_createStore as createStore, compose} from 'redux' 
import thunk from 'redux-thunk'
import { hotelReducer } from './hotelReducer'
import tourReducer from './tourReducer'
 
let reducers = combineReducers({  
    hotelPage: hotelReducer,
    tourReducer
}) 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
 
window.store= store
export default store