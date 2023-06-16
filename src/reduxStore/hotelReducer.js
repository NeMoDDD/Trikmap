import {
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    limit,
    where,
    setDoc,
    getCountFromServer,
    updateDoc,
    arrayUnion
} from "@firebase/firestore";
import {db} from '../components/Authorization/firebase/firebase'
import axios from "axios";
import {setErrorAC} from "./appReducer";

const ref = collection(db, "Hotels");
const commentRef = collection(db, "Comments"); 
const orderRef = collection(db, 'OrderingHotel')

let initialState = {
    totalDocs: null,
    pageSize: 3,
    currentPage: 1,
    hotels: [],
    orderingHotel: [],
    isFetching: false,
    selectedHotelCity: [],
    selectedHotelRegion: [],
    selectedHotelRating: [],
    coordinates: [],
    isSucceed: false,
    comments: [],
    currentRating:null, 
    commentLoading: false,
}
const defaultValue = 'HOTEL/'
const GET_CURRENT_PAGE = defaultValue + 'GET_CURRENT_PAGE'
const GET_SELECT_HOTEL_CITY = defaultValue + 'GET_SELECT_HOTEL_CITY'
const GET_SELECT_HOTEL_REGION = defaultValue + 'GET_SELECT_HOTEL_REGION'
const GET_SELECT_HOTEL_RATING = defaultValue + 'GET_SELECT_HOTEL_RATING'
const GET_HOTEL = defaultValue + 'GET_HOTEL'
const TOGGLE_FETCH = defaultValue + 'TOGGLE_FETCH'
const SET_HOTELS = defaultValue + 'SET_HOTELS'
const SET_SEARCH = defaultValue + 'SET_SEARCH'
const GET_TOTAL_DOCS = defaultValue + 'GET_TOTAL_DOCS'
const SET_COORDINATES = defaultValue + 'SET_COORDINATES'
const SET_SUCCEED = defaultValue + 'SET_SUCCEED'
const GET_HOTEL_COMMENTS = defaultValue + 'GET_HOTEL_COMMENTS'
const SET_CURRENT_RATING = defaultValue + 'SET_CURRENT_RATING'
const TOGGLE_COMMENT_LOADING = defaultValue + 'TOGGLE_COMMENT_LOADING'
export const hotelReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_HOTELS: {
            return {
                ...state,
                hotels: action.data
            }
        }
        case GET_HOTEL : {
            return {
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
            return {
                ...state,
                hotels: action.data
            }
        }
        case GET_SELECT_HOTEL_CITY: {
            return {
                ...state,
                selectedHotelCity: action.data
            }
        }
        case GET_TOTAL_DOCS: {
            return {
                ...state,
                totalDocs: action.data
            }
        }
        case GET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.data
            }
        }
        case GET_SELECT_HOTEL_REGION: {
            return {
                ...state,
                selectedHotelRegion: action.data
            }
        }
        case GET_SELECT_HOTEL_RATING: {
            return {
                ...state,
                selectedHotelRating: action.data
            }
        }
        case SET_COORDINATES: {
            return {...state, coordinates: action.data}
        }
        case SET_SUCCEED: {
            return {...state, isSucceed: action.data}
        }
        case GET_HOTEL_COMMENTS: {
            return {
                ...state, comments: action.data
            }
        }
        case SET_CURRENT_RATING: {
            return {...state, currentRating: action.data}
        } 
        case TOGGLE_COMMENT_LOADING:{ 
            return{ 
                ...state,
                commentLoading: action.data
            }
        }
        default:
            return state
    }
}
//Action Creators 
export const setHotelsAC = (data) => ({type: SET_HOTELS, data})
export const getOrderingHotelAC = (data) => ({type: GET_HOTEL, data})
export const setSearchingCityAC = (data) => ({type: SET_HOTELS, data})

export const getSelectedHotelRatingAC = (data) => ({type: GET_SELECT_HOTEL_RATING, data})
export const getSelectedHotelCityAC = (data) => ({type: GET_SELECT_HOTEL_CITY, data})
export const getSelectedRegionAC = (data) => ({type: GET_SELECT_HOTEL_REGION, data})

export const toggleFetchingAC = (toggle) => ({type: TOGGLE_FETCH, toggle})
export const getTotalDocsAC = (data) => ({type: GET_TOTAL_DOCS, data})
export const getCurrentPageAC = (data) => ({type: GET_CURRENT_PAGE, data})
const setSucceedAC = (data) => ({type: SET_SUCCEED, data})
const setCoordinatedAC = (data) => ({type: SET_COORDINATES, data})
const getHotelComments = (data) => ({type: GET_HOTEL_COMMENTS, data})
const setCurrentRatingAC = (data) => ({type: SET_CURRENT_RATING, data}) 
const toggleHotelCommentLoadingAC = (data) =>({type:TOGGLE_COMMENT_LOADING, data})
//Thunk Creators
export const getHotelsTC = () => {
    return async (dispath) => {
        dispath(toggleFetchingAC(true))
        try {
            const citySnapshot = await getDocs(ref);
            const cityList = citySnapshot.docs.map(doc => doc.data());
            const snapshot = await getCountFromServer(ref);
            Promise.all([dispath(getTotalDocsAC(snapshot.data().count)),
                dispath(setHotelsAC(cityList))])
        } catch {
            dispath(setErrorAC(true))
        }
        dispath(toggleFetchingAC(false))
    }
}


export const getCommentsTC = (document) => {
    return async (dispatch) => {
        dispatch(toggleFetchingAC(true))
        try {
            const docRef = doc(commentRef, document);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                dispatch(getHotelComments(docSnap.data()))
            }
        } catch (error) {
            dispatch(setErrorAC(true))
        }
        dispatch(toggleFetchingAC(false))
    };
};
export const getOrderHotelTC = (document) => {
    return async (dispatch) => { 
        dispatch(setSucceedAC(false))
        dispatch(toggleFetchingAC(true))
        try {
            const docRef = doc(ref, document);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                dispatch(setCurrentRatingAC(docSnap.data().rating))
                const address = `${docSnap.data().street}, ${docSnap.data().city}, Кыргызстан`
                const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
                const response = await axios.get(apiUrl);
                dispatch(setCoordinatedAC(response.data))
                dispatch(getOrderingHotelAC(docSnap.data()));
                dispatch(getCommentsTC(document))
            }
        } catch (error) {
            dispatch(setErrorAC(true))
        }
        dispatch(toggleFetchingAC(false))
    };
}
export const getSerchingCityTC = (searchingCity, rating = false) => async (dispatch) => searchingOptionFlow(dispatch, 'city', searchingCity, setHotelsAC, +rating)
export const getSerchingRatingTC = (searchingRating) => async (dispatch) => searchingOptionFlow(dispatch, 'rating', +searchingRating, setHotelsAC)
export const getSerchingRegionTC = (searchingRegion, rating = false) => async (dispatch) => searchingOptionFlow(dispatch, 'region', searchingRegion, setHotelsAC, +rating)

const searchingOptionFlow = async (dispatch, optionMethod, searchingOption, AC, rating) => {
    if (searchingOption === '') {
        await Promise.all([dispatch(getHotelsTC())]);
        return;
    }
    if (!rating) {
        const city = query(
            ref,
            where(optionMethod, '==', searchingOption),
            limit(20)
        );
        const querySnap = await getDocs(city);
        const data = querySnap.docs.map((snap) => snap.data());
        dispatch(getTotalDocsAC(data.length));
        dispatch(AC(data));
        return;
    }
    const city = query(
        ref,
        where(optionMethod, '==', searchingOption),
        where('rating', '==', rating),
        limit(20)
    );
    const querySnap = await getDocs(city);
    const data = querySnap.docs.map((snap) => snap.data());
    dispatch(getTotalDocsAC(data.length));
    dispatch(AC(data));
}

export const setNewHotel = (data) => {
    return async () => {
        const photo = data.photo.flatMap(({value}) => value);
        await setDoc(doc(ref, data.name), {...data, photo});
        await setDoc(doc(commentRef, data.name), {});
    }
}
export const addCommentTC = (document, dataObj) => async (dispatch) => {
    dispatch(toggleHotelCommentLoadingAC(true)) 
    const postRef = doc(commentRef, document);
    await updateDoc(postRef, {
        data: arrayUnion(dataObj)
    });
    dispatch(getHotelRatingTC(document))
    dispatch(toggleHotelCommentLoadingAC(false))
    dispatch(getCommentsTC(document))
}

const calculateAverage = (array) => {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
};
export const getHotelRatingTC = (document) => async (dispatch) => {
    const hotelRef = doc(commentRef, document);
    const hotelDoc = await getDoc(hotelRef);

    let ratings = []
    if (hotelDoc.exists()) {
        const data = hotelDoc.data().data;
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
    const docRef = doc(ref, document);
    try {
        dispatch(setCurrentRatingAC(rating))
        await setDoc(docRef, newData, {merge: true});
    } catch (error) {
        dispatch(setErrorAC(true))
    }
}

export const allOptionsFlow = () => async (dispatch) => {
    const querySnapshot = await getDocs(ref);
    const ratingOptions = Array.from(new Set(querySnapshot.docs.map((doc) => doc.data().rating)));
    const cityOptions = Array.from(new Set(querySnapshot.docs.map((doc) => doc.data().city)));
    const regionOptions = Array.from(new Set(querySnapshot.docs.map((doc) => doc.data().region)));
    Promise.all([dispatch(getSelectedHotelCityAC(cityOptions)), dispatch(getSelectedHotelRatingAC(ratingOptions)), dispatch(getSelectedRegionAC(regionOptions))]);
}
export const setBookTC = (inner, out, email, id, name, num, amount, type) => async (dispatch) => {
    const postRef = doc(orderRef, email);  
    const newData={ 
            inner, 
            out,
            email,
            id, 
            name, 
            num,  
            amount, 
            type,
    } 
    try { 
        await setDoc(postRef, {
            data: arrayUnion(newData)
        }, {merge: true});
        dispatch(setSucceedAC(true))
    } catch(error) {
        console.log(error);
    }
}

