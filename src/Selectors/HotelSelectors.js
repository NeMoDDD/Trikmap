import { createSelector } from 'reselect';

const getLoadStatusState = (state) => state.hotelPage.isFetching;
export const isFetching = createSelector(
  [getLoadStatusState],
  (isFetching) => isFetching,
); 

const getHotelPageState = state => state.hotelPage;

export const getHotels = createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.hotels
);

export const getSelectedHotelCity = createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.selectedHotelCity
);

export const getTotalDocs = createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.totalDocs
);

export const getPageSize = createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.pageSize
);

export const getCurrentPage = createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.currentPage
);

export const getSelectedHotelRegion = createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.selectedHotelRegion
);

export const getSelectedHotelRatingSelector = createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.selectedHotelRating
); 
export const getOrderingHotelOptions= createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.orderingHotel
); 
export const isSucceedSelector= createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.isSucceed
); 
export const getCommentsSelector= createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.comments
); 
export const getCoordinatesSelector= createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.coordinates
); 
export const getCurrentRatingSelector= createSelector(
  [getHotelPageState],
  hotelPage => hotelPage.currentRating
);
