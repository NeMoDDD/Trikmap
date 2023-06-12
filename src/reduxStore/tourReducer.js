import {collection,getDocs,doc,getDoc,setDoc,updateDoc,arrayUnion} from "@firebase/firestore";   
import {db} from '../components/Authorization/firebase/firebase'
import { setErrorAC } from "./appReducer";
const tourRef = collection(db, "Tours")
const commentRef = collection(db, "ToursComments");
const defaultType = 'TOUR_REDUCER/'
const SET_TOURS = defaultType +'SET_TOURS'
const SET_SELECTED_TOUR = defaultType + 'SET_SELECTED_TOUR'
const TOGGLE_FETCH = defaultType + 'TOGGLE_FETCH'  
const TOGGLE_SUCCEED = defaultType + 'TOGGLE_SUCCEED' 
const GET_ALL_COMMENTS = defaultType + 'GET_ALL_COMMENTS'
const initialState = { 

    tours : [],  
    isFetching: false, 
    selectedTour: [],  
    isSucceed: false, 
    comments:[]
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
        case TOGGLE_SUCCEED:{ 
            return{...state, isSucceed: action.data}
        } 
        case GET_ALL_COMMENTS:{ 
            return{...state, comments: action.data}
        }
        default: 
        return state
    }
}  

const setTourAC = (data) => ({type:SET_TOURS,data})
const setSelectedTourAC = (data) =>({type: SET_SELECTED_TOUR, data}) 
const toggleLoaderAC = (data) =>({type:TOGGLE_FETCH , data}) 
const setSucceedAC = (data) =>({type:TOGGLE_SUCCEED, data}) 
const setCommentsAC = (data) =>({type:GET_ALL_COMMENTS, data})
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
        dispatch(getCommentsTC(document))
        dispatch(setSelectedTourAC(docSnap.data()));
        }
      } catch (error) {
        dispatch(setErrorAC(true))
      }  
     dispatch( toggleLoaderAC(false))
} 
export const setBookTC = (date,email,id,name, num,amount,type) => async(dispatch) =>{ 
    try{ 
      await setDoc(doc(db, "OrderingTour",id), {date,email,id,name,number: num,amount,type});  
      dispatch(setSucceedAC(true))
    }catch{ 
      dispatch(setErrorAC(true))
    }
  } 
  export const addCommentTC = (document, dataObj) => async(dispatch) =>{ 
    const postRef = doc(commentRef, document);
    await updateDoc(postRef, {
      data: arrayUnion(dataObj)
    }); 
    dispatch(getCommentsTC(document))
  
} 
export const getCommentsTC = (document) => {
    return async (dispatch) => { 
      dispatch(toggleLoaderAC(true))
      try {
        const docRef = doc(commentRef, document);
        const docSnap = await getDoc(docRef); 
        if (docSnap.exists()) {    
        dispatch(setCommentsAC(docSnap.data()))
        }
      } catch (error) { 
        dispatch(setErrorAC(true))
      } 
      dispatch(toggleLoaderAC(false))
    };
  };
export default tourReducer