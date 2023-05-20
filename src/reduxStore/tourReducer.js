import {collection,getDocs,doc,getDoc, query, limit,where, orderBy,setDoc, getCountFromServer} from "@firebase/firestore";   
import {db} from '../firebase/firebase-booking'

const tourRef = collection(db, "Tours")

const defaultType = 'TOUR_REDUCER/'
const SET_TOURS = defaultType +'SET_TOURS'
 

const initialState = { 
    totalDocs : null, 
    pageSize: 2, 
    currentPage: 1,   
    tours : [],  
    orderingTour : [],
    isFetching: false, 
    selectedTourCity: []
} 
const tourReducer = (state = initialState, action) =>{ 
    switch(action.type){  
        case SET_TOURS :{ 
            return{ 
            ...state, 
            tours: action.data
        }
        }
        default: 
        return state
    }
}  

const setTourAC = (data) => ({type:SET_TOURS,data})

export const getTourTC = () => async(dispatch) =>{ 
    const citySnapshot = await getDocs(tourRef);
    const cityList = citySnapshot.docs.map(doc => doc.data());  
    dispatch(setTourAC(cityList))
}
export default tourReducer