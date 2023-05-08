import { collection,getDocs,doc,getDoc, startAfter,query, limit,where, setDoc, getCountFromServer,orderBy} from "@firebase/firestore";   
import {db, firestore } from '../firebase/firebase-booking'
 

const ref = collection(db, "Hotels");
 let initialState = { 
    totalDocs : null, 
    pageSize: 1,   
    lastVisible: '',
    hotels : [],  
   orderingHotel : [],
   isFetching: false, 
   selectedHotelCity: []
} 
// let pagesCount = Math.ceil(props.totalUsers / props.pageSize)
//         let pages = []; 
//         for(let i = 1; i<= pagesCount; i++){ 
//             pages.push(i)
//         } 
const GET_SELECT_HOTEL_CITY = 'GET_SELECT_HOTEL_CITY' 
const  GET_HOTEL ='GET_HOTEL'
const TOGGLE_FETCH ='TOGGLE_FETCH'
const SET_HOTELS = 'SET_HOTELS' 
const SET_SEARCH = 'SET_SEARCH' 
const GET_TOTAL_DOCS = 'GET_TOTAL_DOCS'  
const SET_LAST_VISIBLE = 'SET_LAST_VISIBLE' 
const GET_NEXT_PAGE = 'GET_NEXT_PAGE'
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
        case SET_LAST_VISIBLE: {  
            debugger
            return {  
                ...state, 
                lastVisible: action.data
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
export const setLastVisibleAC = (data) => ({type: SET_LAST_VISIBLE, data}) 
export const getPageAC = (data) => ({type: GET_NEXT_PAGE, data})
//Thunk Creators
export const getHotelsTC = () => { 
    return async (dispath) => {   
            const first = query(ref, orderBy("rating"), limit(initialState.pageSize));
            const documentSnapshots = await getDocs(first);
            const cityLists = documentSnapshots.docs.map(doc => doc.data());
            const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
            dispath(setLastVisibleAC(lastVisible))
            dispath(setHotelsAC(cityLists)) 
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
                   return dispatch(getHotelsTC())
                } 
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
                dispatch(setSearchingCityAC(data))            
            } 
}
 
export const setNewHotel =  (data) =>{   
    return async ()=>{ 
        const photo = data.photo.flatMap(({ value }) => value); 
        console.log(photo)
        await setDoc(doc(db, "Hotels", data.name), {...data, photo});
    }
} 
export const getSelectedHotelCityTC = () =>{ 
    return (dispath) =>{  
        const myCollectionRef = collection(db, "Hotels")
        const arr = [] 
    getDocs(myCollectionRef)
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => arr.push(doc.data().city)); 
        let uniqueArray = arr.filter((item, pos)=> {
              return arr.indexOf(item) === pos;
            }) 
        dispath(getSelectedHotelCityAC(uniqueArray)) 
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    })
    .finally(() =>{ 
        dispath(toggleFetchingAC(false)) 
    })  

}
}   
export const getTotalDocsTC = () => async (dispatch)=>{ 
    const snapshot = await getCountFromServer(ref); 
    dispatch(getTotalDocsAC(snapshot.data().count))
} 
export const getNextPageTC = (data) => async (dispatch) => { 
    debugger
    const next = query(collection(db, "Hotels"),
    orderBy("rating"),
    startAfter(data),
    limit(initialState.pageSize)); 
    const documentSnapshots = await getDocs(next);
    const cityListsa = documentSnapshots.docs.map(doc => doc.data());  
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
    dispatch(setLastVisibleAC(lastVisible))
    dispatch(setHotelsAC(cityListsa))
}