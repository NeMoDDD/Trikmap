 
 
 
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
        default: 
        return state
    }
} 
export default tourReducer