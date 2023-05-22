import {collection,getDocs,doc,getDoc, query, limit,where, setDoc, getCountFromServer} from "@firebase/firestore";   
import {db } from '../firebase/firebase-booking'
 

const ref = collection(db, "Hotels");
 let initialState = { 
    totalDocs : null, 
    pageSize: 3, 
    currentPage: 1,   
    hotels : [],  
    orderingHotel : [],
    isFetching: false, 
    selectedHotelCity: [], 
    selectedHotelRegion: [],
}   
const myCollectionRef = collection(db, "Hotels");
const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE'
const GET_SELECT_HOTEL_CITY = 'GET_SELECT_HOTEL_CITY' 
const GET_SELECT_HOTEL_REGION = 'GET_SELECT_HOTEL_REGION' 
const GET_HOTEL ='GET_HOTEL'
const TOGGLE_FETCH ='TOGGLE_FETCH'
const SET_HOTELS = 'SET_HOTELS' 
const SET_SEARCH = 'SET_SEARCH' 
const GET_TOTAL_DOCS = 'GET_TOTAL_DOCS'  

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
        case GET_SELECT_HOTEL_CITY: { 
            return{ 
                ...state, 
                selectedHotelCity: action.data
            }
        } 
        case GET_TOTAL_DOCS: { 
            return{ 
                ...state, 
                totalDocs: action.data
            }
        } 
        case GET_CURRENT_PAGE: { 
            return{ 
                ...state, 
                currentPage: action.data
            }
        } 
        case GET_SELECT_HOTEL_REGION:{ 
            return{ 
                ...state,  
                selectedHotelRegion: action.data
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
export const getSelectedHotelCityAC = (data) =>({type: GET_SELECT_HOTEL_CITY, data})
export const getTotalDocsAC = (data) => ({type: GET_TOTAL_DOCS, data})
export const getCurrentPageAC = (data) => ({type:GET_CURRENT_PAGE, data }) 
export const getSelectedRegionAC = (data) =>({type: GET_SELECT_HOTEL_REGION, data})
//Thunk Creators
export const getHotelsTC = () => { 
    return async (dispath) => {   
        const citySnapshot = await getDocs(ref);
        const cityList = citySnapshot.docs.map(doc => doc.data()); 
        dispath(setHotelsAC(cityList)) 
        dispath(toggleFetchingAC(false))  
        } 
    }
  
export const getOrderHotelTC = (document) => {
  return async (dispatch) => {
    try {
      const docRef = doc(ref, document);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(getOrderingHotelAC(docSnap.data()));
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
};
export const getSerchingCityTC = (searchingCity) => {
  return async (dispatch) => {
    if (searchingCity === '') {
      await Promise.all([dispatch(getHotelsTC()), dispatch(getTotalDocsTC())]);
      return;
    }

    const city = query(
      ref,
      where('city', '==', searchingCity),
      limit(20)
    );

    const querySnap = await getDocs(city);
    const data = querySnap.docs.map((snap) => snap.data());

    dispatch(getTotalDocsAC(data.length));
    dispatch(setSearchingCityAC(data));
  };
}; 
export const getSerchingRegionTC = (searchingRegion) => {
  return async (dispatch) => {
    if (searchingRegion === '') {
      await Promise.all([dispatch(getHotelsTC()), dispatch(getTotalDocsTC())]);
      return;
    }

    const city = query(
      ref,
      where('region', '==', searchingRegion),
      limit(20)
    );

    const querySnap = await getDocs(city);
    const data = querySnap.docs.map((snap) => snap.data());

    dispatch(getTotalDocsAC(data.length));
    dispatch(setSearchingCityAC(data));
  };
};

export const setNewHotel =  (data) =>{   
    return async ()=>{ 
        const photo = data.photo.flatMap(({ value }) => value); 
        await setDoc(doc(ref, data.name), {...data, photo});
      }
    } 
   
export const getSelectedHotelCityTC = () => {
    return async (dispatch) => {
      try {
        dispatch(toggleFetchingAC(true));
        const querySnapshot = await getDocs(myCollectionRef);
        const uniqueArray = Array.from(new Set(querySnapshot.docs.map((doc) => doc.data().city)));
        dispatch(getSelectedHotelCityAC(uniqueArray));
        dispatch(toggleFetchingAC(false));
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
  }; 
export const getSelectedHotelRegionTC = () => {
    return async (dispatch) => {
      try {
        dispatch(toggleFetchingAC(true));
        const querySnapshot = await getDocs(myCollectionRef);
        const uniqueArray = Array.from(new Set(querySnapshot.docs.map((doc) => doc.data().region)));
        dispatch(getSelectedRegionAC(uniqueArray));
        dispatch(toggleFetchingAC(false));
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
  };  
export const getTotalDocsTC = () => async (dispatch)=>{ 
  const snapshot = await getCountFromServer(ref); 
  dispatch(getTotalDocsAC(snapshot.data().count))
} 
 














// export const getSelectedHotelCityTC = () =>{ 
  //     return (dispath) =>{  
    //         const myCollectionRef = collection(db, "Hotels")
//         const arr = [] 
//     getDocs(myCollectionRef)
//         .then((querySnapshot) => {
  //             querySnapshot.forEach((doc) => arr.push(doc.data().city)); 
  //         let uniqueArray = arr.filter((item, pos)=> {
    //               return arr.indexOf(item) === pos;
    //             }) 
    //         dispath(getSelectedHotelCityAC(uniqueArray)) 
    //     })
    //     .catch((error) => {
      //         console.log("Error getting documents: ", error);
//     })
//     .finally(() =>{ 
//         dispath(toggleFetchingAC(false)) 
//     })  

// }
// }  
// export const getSerchingCityTC = (searchingCity) =>{ 
//     return async (dispatch) =>{   
//                 if(searchingCity === ''){  
//                 dispatch(getHotelsTC())
//                 return dispatch(getTotalDocsTC())
//                 } 
//                 const city = query(  
//                     collection(firestore, 'Hotels'), 
//                     where( 'city' , '==', searchingCity) , 
//                     limit(20)            
//                 )    
//                 const data = []
//                 const  querySnap = await getDocs(city)  
//                 querySnap.forEach((snap) =>{  
//                     data.push(snap.data())
//                 })    
//                 dispatch(getTotalDocsAC(data.length))
//                 dispatch(setSearchingCityAC(data))            
//             } 
// }