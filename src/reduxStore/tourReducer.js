import {collection,getDocs,doc,getDoc} from "@firebase/firestore";   
import {db} from '../components/Authorization/firebase/firebase'
import { toggleFetchingAC } from "./hotelReducer";
import { setErrorAC } from "./appReducer";
const tourRef = collection(db, "Tours")

const defaultType = 'TOUR_REDUCER/'
const SET_TOURS = defaultType +'SET_TOURS'
const SET_SELECTED_TOUR = defaultType + 'SET_SELECTED_TOUR'
const TOGGLE_FETCH = defaultType + 'TOGGLE_FETCH' 
const initialState = { 
    // totalDocs : null, 
    // pageSize: 2, 
    // currentPage: 1,   
    tours : [],  
    isFetching: false, 
    selectedTour: [], 
} 
const tourReducer = (state = initialState, action) =>{ 
    switch(action.type){  
        case SET_TOURS :{ 
            return{ 
            ...state, 
            tours: action.data
        }} 
        case SET_SELECTED_TOUR: { 
            return{ 
                ...state, 
                selectedTour:action.data
            }
        } 
        case TOGGLE_FETCH :{ 
            return{ 
                ...state, 
                isFetching: action.data 
            }
        } 
        default: 
        return state
    }
}  

const setTourAC = (data) => ({type:SET_TOURS,data})
const setSelectedTourAC = (data) =>({type: SET_SELECTED_TOUR, data}) 
const toggleLoaderAC = (data) =>({type:TOGGLE_FETCH , data}) 

export const getTourTC = () => async(dispatch) =>{ 
    dispatch(toggleLoaderAC(true)) 
    try{ 
        const citySnapshot = await getDocs(tourRef);
        const cityList = citySnapshot.docs.map(doc => doc.data());  
        dispatch(setTourAC(cityList))
    } catch{ 
        dispatch(setErrorAC(true))
    } 
    dispatch(toggleLoaderAC(false)) 
}  
export const setSelectedTourTC = (document) => async(dispatch) =>{
    dispatch(toggleLoaderAC(true)) 
    try {
        const docRef = doc(tourRef, document);
        const docSnap = await getDoc(docRef); 
        if (docSnap.exists()) {   
        dispatch(setSelectedTourAC(docSnap.data()));
        }
      } catch (error) {
        dispatch(setErrorAC(true))
      }  
     dispatch( toggleFetchingAC(false))
}

export default tourReducer