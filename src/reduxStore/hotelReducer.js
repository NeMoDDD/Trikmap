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
import { db } from '../components/Authorization/firebase/firebase'
import axios from "axios";
import { setErrorAC } from "./appReducer";

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
    currentRating: null,
    commentLoading: false,
    hotelFetch: false,
    isHotelError: false
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
const TOGGLE_HOTEL_OPTION_FETCH = defaultValue + 'TOGGLE_HOTEL_OPTION_FETCH'
const TOGGLE_HOTEL_ERRROR = defaultValue + 'TOGGLE_HOTEL_ERRROR'
export const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOTELS: {
            return { ...state, hotels: action.data }
        }
        case GET_HOTEL: {
            return { ...state, orderingHotel: action.data }
        }
        case TOGGLE_FETCH: {
            return { ...state, isFetching: action.toggle }
        }
        case SET_SEARCH: {
            return { ...state, hotels: action.data }
        }
        case GET_SELECT_HOTEL_CITY: {
            return { ...state, selectedHotelCity: action.data }
        }
        case GET_TOTAL_DOCS: {
            return { ...state, totalDocs: action.data }
        }
        case GET_CURRENT_PAGE: {
            return { ...state, currentPage: action.data }
        }
        case GET_SELECT_HOTEL_REGION: {
            return { ...state, selectedHotelRegion: action.data }
        }
        case GET_SELECT_HOTEL_RATING: {
            return { ...state, selectedHotelRating: action.data }
        }
        case SET_COORDINATES: {
            return { ...state, coordinates: action.data }
        }
        case SET_SUCCEED: {
            return { ...state, isSucceed: action.data }
        }
        case GET_HOTEL_COMMENTS: {
            return { ...state, comments: action.data }
        }
        case SET_CURRENT_RATING: {
            return { ...state, currentRating: action.data }
        }
        case TOGGLE_COMMENT_LOADING: {
            return { ...state, commentLoading: action.data }
        }
        case TOGGLE_HOTEL_OPTION_FETCH: {
            return { ...state, hotelFetch: action.data }
        }
        case TOGGLE_HOTEL_ERRROR: {
            return { ...state, isHotelError: action.data }
        }
        default: return state
    }
}
//Action Creators 
const setHotelsAC = (data) => ({ type: SET_HOTELS, data })
const getOrderingHotelAC = (data) => ({ type: GET_HOTEL, data })
//Фунции, для загрузки отелей 

const getSelectedHotelRatingAC = (data) => ({ type: GET_SELECT_HOTEL_RATING, data })
const getSelectedHotelCityAC = (data) => ({ type: GET_SELECT_HOTEL_CITY, data })
const getSelectedRegionAC = (data) => ({ type: GET_SELECT_HOTEL_REGION, data })
const setCurrentRatingAC = (data) => ({ type: SET_CURRENT_RATING, data })
//Фунции, для загрузки данных, с помощью которых осуществляется поиск на странице 

const getTotalDocsAC = (data) => ({ type: GET_TOTAL_DOCS, data })
export const getCurrentPageAC = (data) => ({ type: GET_CURRENT_PAGE, data })
//Функции, для получения данных от странице для пагинации

const setCoordinatedAC = (data) => ({ type: SET_COORDINATES, data })
const getHotelComments = (data) => ({ type: GET_HOTEL_COMMENTS, data })
//Функции, для получения определенных данных, для определенных отелей(комментарии и координаты для локации отеля) 

const setSucceedAC = (data) => ({ type: SET_SUCCEED, data })
const toggleFetchingAC = (toggle) => ({ type: TOGGLE_FETCH, toggle })
const toggleHotelCommentLoadingAC = (data) => ({ type: TOGGLE_COMMENT_LOADING, data })
const toggleHotelOptionLoaderAC = (data) => ({ type: TOGGLE_HOTEL_OPTION_FETCH, data })
const toggleHotelErrorAC = (data) => ({ type: TOGGLE_HOTEL_ERRROR, data })
//Различные фунции, которые предназначены для отлова ошибок и различных заргрузок(Preloaders) 

//Thunk Creators 

export const getHotelsTC = () => {
    return async (dispath) => {
        dispath(toggleFetchingAC(true))
        dispath(getCurrentPageAC(1))
        dispath(toggleHotelErrorAC(false))
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
//Функция, которая возвращает массив данных, при монтировании отелей с лоадером и общим количеством данных, для пагинации

export const getCommentsTC = (document) => {
    return async (dispatch) => {
        dispatch(toggleFetchingAC(true))
        try {
            const docRef = doc(commentRef, document);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                dispatch(getHotelComments(docSnap.data()))
            } else {
                await setDoc(doc(commentRef, document), {});
                dispatch(getCommentsTC(document))
            }
        } catch (error) {
            console.log(error);
            dispatch(setErrorAC(true))
        }
        dispatch(toggleFetchingAC(false))
    };
};
// Функция, которая возвращает массив определенных комментариев, в зависимости от отеля,  
//   а если такого отеля нет, то создает новый документ с название,как у отеля


export const getOrderHotelTC = (document) => {
    return async (dispatch) => {
        dispatch(setSucceedAC(false))
        dispatch(toggleFetchingAC(true))
        try {
            const docRef = doc(ref, document);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                throw new Error()
            }
            dispatch(setCurrentRatingAC(docSnap.data().rating))
            const address = `${docSnap.data().street}, ${docSnap.data().city}, Кыргызстан`
            const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
            const response = await axios.get(apiUrl);
            dispatch(setCoordinatedAC(response.data))
            dispatch(getOrderingHotelAC(docSnap.data()));
            dispatch(getCommentsTC(document))
        } catch (error) { 
            console.log(error);
            dispatch(setErrorAC(true))
        }
        dispatch(toggleFetchingAC(false))
    };
}
//Функция, которая возварщает, массив определенного отеля, аргументом которого является название отеля.
//Также данная функция, делает запрос на сервер для получения координатов отеля. 
//Также данная функция, обновляет(обнуляет) форму, которую возможно пользователь отправил на сервер.


export const getSerchingCityTC = (searchingCity, rating = false) => async (dispatch) => searchingOptionFlow(dispatch, 'city', searchingCity, setHotelsAC, +rating)
export const getSerchingRatingTC = (searchingRating) => async (dispatch) => searchingOptionFlow(dispatch, 'rating', +searchingRating, setHotelsAC)
export const getSerchingRegionTC = (searchingRegion, rating = false) => async (dispatch) => searchingOptionFlow(dispatch, 'region', searchingRegion, setHotelsAC, +rating)
const searchingOptionFlow = async (dispatch, optionMethod, searchingOption, AC, rating) => {
    dispatch(getCurrentPageAC(1))
    dispatch(toggleHotelOptionLoaderAC(true))
    try {
        dispatch(toggleHotelErrorAC(false))
        if (searchingOption === '') {
            return await Promise.all([dispatch(getHotelsTC())]);
        }
        if (!rating) {
            const city = query(
                ref,
                where(optionMethod, '==', searchingOption),
                limit(20)
            );
            const querySnap = await getDocs(city);
            console.log(querySnap);
            const data = querySnap.docs.map((snap) => snap.data());
            dispatch(getTotalDocsAC(data.length));
            dispatch(AC(data));
            return dispatch(toggleHotelOptionLoaderAC(false))
        }
        const city = query(
            ref,
            where(optionMethod, '==', searchingOption),
            where('rating', '==', rating),
            limit(20)
        );
        const querySnap = await getDocs(city);

        if (querySnap.empty) {
            throw new Error()
        }
        const data = querySnap.docs.map((snap) => snap.data());
        dispatch(getTotalDocsAC(data.length));
        dispatch(AC(data));

    } catch (error) {
        console.log(error);
        dispatch(toggleHotelErrorAC(true))
    }
    dispatch(toggleHotelOptionLoaderAC(false))

}
// Рефакторинг кода(можно было получше,но нету времени, а на написание комментариев есть), 
// Данные 3 функциии выполняют почти один и тот же фунционал, оличаются данными, которые приходят 
// Функция, которая возварщает множество массивов отелей, в зависимоти от аргументов(рейтинг,область,город), также возвращает размер всех массивов для пагинации
// Если аргумент с данными пустой, то вызывает коллбек, на загрузку всех отелей, иначе высылается запрос на сервер с определенными аргументами, которые возможно комбинировать


export const setNewHotel = (data) => {
    return async () => {
        await setDoc(doc(ref, data.name), { ...data});
        await setDoc(doc(commentRef, data.name), {});
    }
}
// Функция для админки, т.е добавление новых отелей на сервер

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
//Добавление новых комментариев и отзывов для определенных отелей 


const calculateAverage = (array) => {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
};
// Фунция, для вычисленния среднего значения

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
// Фунция, для получения всех отзывов и вычисления рейтинга, которые оставили пользователи, с дальнейшим обновление на сервере
export const updateHotelRatingTC = (document, rating) => async (dispatch) => {
    const newData = {
        rating
    };
    const docRef = doc(ref, document);
    try {
        dispatch(setCurrentRatingAC(rating))
        await setDoc(docRef, newData, { merge: true });
    } catch (error) {
        dispatch(setErrorAC(true))
    }
}
//Функция, которая обновляет рейтинг отеля   



export const allOptionsFlow = () => async (dispatch) => {
    const querySnapshot = await getDocs(ref);
    const ratingOptions = Array.from(new Set(querySnapshot.docs.map((doc) => doc.data().rating)));
    const cityOptions = Array.from(new Set(querySnapshot.docs.map((doc) => doc.data().city)));
    const regionOptions = Array.from(new Set(querySnapshot.docs.map((doc) => doc.data().region)));
    Promise.all([dispatch(getSelectedHotelCityAC(cityOptions)), dispatch(getSelectedHotelRatingAC(ratingOptions)), dispatch(getSelectedRegionAC(regionOptions))]);
}
// Зарефакторенный код, который уменьшился за в 10 раз 
// Фунция, которая проходит по всем отелям и возвращает регионы, города и рейтинг все отелей, для последующего использовании в Селекторе выбора поиска
export const setBookTC = (inner, out, email, id, name, num, amount, type) => async (dispatch) => {
    const postRef = doc(orderRef, email);
    const newData = {
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
        }, { merge: true });
        dispatch(setSucceedAC(true))
    } catch (error) {
        dispatch(setErrorAC(true))
    }
}
// Функция, при помозщи которой можно добавить документ о бронировании отеля
