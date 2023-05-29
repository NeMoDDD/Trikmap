import { createSelector } from 'reselect';

const getLoadStatusState = (state) => state.hotelPage.isFetching;
export const isFetching = createSelector(
  [getLoadStatusState],
  (isFetching) => isFetching,
); 
export  const getHotels = (state) =>{ 
    return state.hotelPage.hotels
} 
export  const getSelectedHotelCity = (state) =>{ 
    return state.hotelPage.selectedHotelCity
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
export const getSelectedHotelRatingSelector = state =>{ 
    return state.hotelPage.selectedHotelRating
} 
