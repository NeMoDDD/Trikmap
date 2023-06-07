const TOGGLE_ERROR_APP = 'TOGGLE_ERROR_APP'  
const initialState={ 
    error: false
}
export const appReducer = (state = initialState,action) =>{ 
    switch(action.type){ 
        case TOGGLE_ERROR_APP:{ 
            return{ 
                ...state, 
                error: action.data
            }
        } 
        default:
            return state
        
    }
} 
export const setErrorAC = (data) =>({type:TOGGLE_ERROR_APP, data})