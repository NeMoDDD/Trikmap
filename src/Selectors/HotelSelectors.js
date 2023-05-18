export  const getHotels = (state) =>{ 
    return state.hotelPage.hotels
} 
export  const getSelectedHotelCity = (state) =>{ 
    return state.hotelPage.selectedHotelCity
} 
export const isFetching = state =>{ 
    return state.hotelPage.isFetching
} 
export const getTotalDocs = state =>{ 
    return state.hotelPage.totalDocs
} 
export const getPageSize = state =>{ 
    return state.hotelPage.pageSize
} 
export const getCurrentPage = state =>{ 
    return state.hotelPage.currentPage
} 
export const getSelectedHotelRegion = state =>{ 
    return state.hotelPage.selectedHotelRegion
}