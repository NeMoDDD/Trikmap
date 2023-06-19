import {applyMiddleware, combineReducers,  legacy_createStore as createStore, compose} from 'redux' 
import thunk from 'redux-thunk'
import { hotelReducer } from './hotelReducer'
import tourReducer from './tourReducer'
import userReducer from '../components/store/slices/userSlise' 
import attractionReducer from '../components/store/slices/attractionsSlice'
import { appReducer } from './appReducer'
import personalAccountSlice from "../components/store/slices/personalAccountSlice";
let reducers = combineReducers({  
    hotelPage: hotelReducer,
    tourPage:tourReducer, 
    user: userReducer,
    attractions: attractionReducer, 
    app: appReducer,
    personalAccount: personalAccountSlice
}) 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
 
window.store= store
export default store