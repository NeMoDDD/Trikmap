import { collection, getDocs, doc, getDoc, setDoc, updateDoc, arrayUnion } from "@firebase/firestore";
import { db } from '../components/Authorization/firebase/firebase'
import { setErrorAC } from "./appReducer";
const tourRef = collection(db, "Tours")
const commentRef = collection(db, "ToursComments");
const defaultType = 'TOUR_REDUCER/'
const SET_TOURS = defaultType + 'SET_TOURS'
const SET_SELECTED_TOUR = defaultType + 'SET_SELECTED_TOUR'
const TOGGLE_FETCH = defaultType + 'TOGGLE_FETCH'
const TOGGLE_SUCCEED = defaultType + 'TOGGLE_SUCCEED'
const GET_ALL_COMMENTS = defaultType + 'GET_ALL_COMMENTS'
const SET_CURRENT_RATING = defaultType + 'SET_CURRENT_RATING'
const TOGGLE_COMMENT_LOADING = defaultType + 'TOGGLE_COMMENT_LOADING'
const initialState = {

  tours: [],
  isFetching: false,
  selectedTour: [],
  isSucceed: false,
  comments: [],
  currentRating: null,
  commentLoading: false
}
const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOURS: {
      return {
        ...state,
        tours: action.data
      }
    }
    case SET_SELECTED_TOUR: {
      return {
        ...state,
        selectedTour: action.data
      }
    }
    case TOGGLE_FETCH: {
      return {
        ...state,
        isFetching: action.data
      }
    }
    case TOGGLE_SUCCEED: {
      return { ...state, isSucceed: action.data }
    }
    case GET_ALL_COMMENTS: {
      return { ...state, comments: action.data }
    }
    case SET_CURRENT_RATING: {
      return { ...state, currentRating: action.data }
    }
    case TOGGLE_COMMENT_LOADING: {
      return { ...state, commentLoading: action.data }
    }
    default:
      return state
  }
}

const setTourAC = (data) => ({ type: SET_TOURS, data })
const setSelectedTourAC = (data) => ({ type: SET_SELECTED_TOUR, data })
const toggleLoaderAC = (data) => ({ type: TOGGLE_FETCH, data })
const setSucceedAC = (data) => ({ type: TOGGLE_SUCCEED, data })
const setCommentsAC = (data) => ({ type: GET_ALL_COMMENTS, data })
const setCurrentRatingAC = (data) => ({ type: SET_CURRENT_RATING, data })
const toggleHotelCommentLoadingAC = (data) => ({ type: TOGGLE_COMMENT_LOADING, data })
export const getTourTC = () => async (dispatch) => {
  dispatch(toggleLoaderAC(true))
  try {
    const citySnapshot = await getDocs(tourRef);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    dispatch(setTourAC(cityList))
  } catch {
    dispatch(setErrorAC(true))
  }
  dispatch(toggleLoaderAC(false))
}
export const setSelectedTourTC = (document) => async (dispatch) => {
  dispatch(toggleLoaderAC(true))
  try {
    const docRef = doc(tourRef, document);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch(setCurrentRatingAC(docSnap.data().rating))
      dispatch(getCommentsTC(document))
      dispatch(setSelectedTourAC(docSnap.data()));
    }
  } catch (error) {
    dispatch(setErrorAC(true))
  }
  dispatch(toggleLoaderAC(false))
}
export const setBookTC = (email, name, num, amount) => async (dispatch) => {
  const postRef = doc(db, "OrderingTour", email);
  const newData = {
    email,
    name,
    num,
    amount,
  }

  try {
    await setDoc(postRef, {
      data: arrayUnion(newData)
    }, { merge: true });
    dispatch(setSucceedAC(true))
  } catch (error) {
    dispatch(setErrorAC(true))
    console.log(error);
  }
}
export const addCommentTC = (document, dataObj) => async (dispatch) => {
  dispatch(toggleHotelCommentLoadingAC(true))
  try {
    const postRef = doc(commentRef, document);
    await updateDoc(postRef, {
      data: arrayUnion(dataObj)
    });
    dispatch(getHotelRatingTC(document))
    dispatch(getCommentsTC(document))
  } catch {

  }
  dispatch(toggleHotelCommentLoadingAC(false))

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


const calculateAverage = (array) => {
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
};
export const getHotelRatingTC = (document) => async (dispatch) => {
  const tourRef = doc(commentRef, document);
  const tourDoc = await getDoc(tourRef);

  let ratings = []
  if (tourDoc.exists()) {
    const data = tourDoc.data().data;
    if (Array.isArray(data)) {
      data.forEach((obj) => {
        if (obj.rating) {
          ratings.push(obj.rating);
        }
      });
    }
  }
  const averageRating = calculateAverage(ratings);
  dispatch(updateHotelRatingTC(document, Math.ceil(averageRating)))
}
export const updateHotelRatingTC = (document, rating) => async (dispatch) => {
  const newData = {
    rating
  };
  const docRef = doc(tourRef, document);
  try {
    dispatch(setCurrentRatingAC(rating))
    await setDoc(docRef, newData, { merge: true });
  } catch (error) {
    dispatch(setErrorAC(true))
  }
}

export default tourReducer