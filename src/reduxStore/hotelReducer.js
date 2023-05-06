import { collection,getDocs,doc,getDoc, query, limit,where, onSnapshot} from "@firebase/firestore";   
import {db, firestore } from '../firebase/firebase-booking'

 let initialState = { 
   hotels : [ 

   ],  
   orderingHotel : [ 

   ],
   isFetching: false, 
   searchCity:  [],

}    
const  GET_HOTEL ='GET_HOTEL'
const TOGGLE_FETCH ='TOGGLE_FETCH'
const SET_HOTELS = 'SET_HOTELS' 
const SET_SEARCH = 'SET_SEARCH'
export const hotelReducer = (state = initialState, action) =>{ 
     switch(action.type){ 
        case SET_HOTELS: {  
            return{ 
                ...state, 
                hotels:action.data
            } 
        }    
        case GET_HOTEL : { 
           return{ 
            ...state, 
            orderingHotel: action.data
           }
        }
        case TOGGLE_FETCH : { 
            return { 
                ...state, 
                isFetching: action.toggle
            }
        } 
        case SET_SEARCH: { 
            return{ 
                ...state, 
                hotels:action.data
            }
        }
        default: 
        return state
     }
}  
//Action Creators 
export const setHotelsAC = ( data) => ({type: SET_HOTELS, data}) 
export const toggleFetchingAC = (toggle) =>({type: TOGGLE_FETCH, toggle})
export const getOrderingHotelAC = (data) =>({type:GET_HOTEL, data})
export const setSearchingCityAC = (data) =>({type: SET_SEARCH, data}) 


//Thunk Creators
export const getHotelsTC = () => { 
    return async (dispath) => {  
            const citiesCol = collection(db, 'Hotels');
            const citySnapshot = await getDocs(citiesCol);
            const cityList = citySnapshot.docs.map(doc => doc.data()); 
            dispath(setHotelsAC(cityList)) 
            dispath(toggleFetchingAC(false)) 
        } 
    }
export const getOrderHotelTC = (document) =>{ 
    return async (dispatch) =>{ 
        const docRef = doc(db, "Hotels", document);
        const docSnap = await getDoc(docRef);  
        if (docSnap.exists()) { 
            dispatch(getOrderingHotelAC(docSnap.data()))
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
    }
}  
export const getSerchingCityTC = (searchingCity) =>{ 
    return async (dispatch) =>{   
                if(searchingCity === ''){  
                   debugger
                    console.log('failed');
                   return dispatch(getHotelsTC())
                } 
                console.log(typeof(searchingCity)); 
                debugger
                const city = query(  
                    collection(firestore, 'Hotels'), 
                    where( 'city' , '==', searchingCity) ,
                    limit(10)            
                )    
                const data = []
                const  querySnap = await getDocs(city)  
                const alldocs = querySnap.forEach((snap) =>{  
                    data.push(snap.data())
                })  
                debugger
                dispatch(setSearchingCityAC(data))
                         
            }

    
}
