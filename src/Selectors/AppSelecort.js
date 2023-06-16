import { createSelector } from 'reselect';
const getAppState = state => state.app;

export const getError = createSelector(
  [getAppState],
  app => app.error
); 
export const getBookedHotelSelector = createSelector(
  [getAppState],
  app => app.OrderedHotels
); 
export const getBookedTourSelector = createSelector(
  [getAppState],
  app => app.OrderedTours
);