import {collection,doc,getDoc} from "@firebase/firestore";   
import {db} from '../components/Authorization/firebase/firebase'
 const TOGGLE_ERROR_APP = 'TOGGLE_ERROR_APP'    
const GET_BOOKED_HOTEL = 'GET_BOOKED_HOTEL' 
const GET_BOOKED_TOUR = 'GET_BOOKED_TOUR'  
const APP_TOGGLE_FETCH = 'APP_TOGGLE_FETCH' 
const hotelRef = collection(db, "OrderingHotel") 
const tourRef = collection(db, "OrderingTour")
const initialState={ 
    error: false, 
    OrderedHotels: [], 
    OrderedTours: [], 
    isFetching: false
}
export const appReducer = (state = initialState,action) =>{ 
    switch(action.type){ 
        case TOGGLE_ERROR_APP:{ 
            return{ 
                ...state, 
                error: action.data
            }
        }  
        case GET_BOOKED_TOUR: {
            return{ 
                ...state, 
                OrderedTours: action.data
            }
        } 
        case GET_BOOKED_HOTEL:{ 
            return{ 
                ...state, 
                OrderedHotels: action.data
            }
        } 
        case APP_TOGGLE_FETCH:{ 
            return{...state, isFetching: action.data}
        }
        default:
            return state
        
    }
} 
export const setErrorAC = (data) =>({type:TOGGLE_ERROR_APP, data}) 
const  setBookedHotelAC = (data) =>({type: GET_BOOKED_HOTEL, data}) 
const setBookedTourAC = (data) =>({type: GET_BOOKED_TOUR, data})  
const toggleLoaderAC = (data) =>({type:APP_TOGGLE_FETCH, data})
export const getBookedTourTC = (document) => async(dispatch) =>{
    try { 
        const docRef = doc(tourRef, document);
        const docSnap = await getDoc(docRef); 
        if (docSnap.exists()) {    
        dispatch(setBookedTourAC(docSnap.data()))
        }
      } catch (error) {
        dispatch(setBookedTourAC(null))
      }
}  
export const getBookedHotelTC = (document) => async(dispatch) =>{
    dispatch(toggleLoaderAC(true))
    try { 
        const docRef = doc(hotelRef, document);
        const docSnap = await getDoc(docRef); 
        if (docSnap.exists()) {     
        dispatch(setBookedHotelAC(docSnap.data()))
        }
      } catch (error) {
        dispatch(setBookedHotelAC(null))
      }
    dispatch(toggleLoaderAC(false))  
}