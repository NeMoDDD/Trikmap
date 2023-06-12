import { createSelector } from 'reselect';

const getToursState = state => state.tourPage;

export const  getToursSelector = createSelector(
  [getToursState],
  tourPage => tourPage.tours
); 
export const isFetchSelector = createSelector( 
    [getToursState], 
    tourPage => tourPage.isFetching
) 
export const defineTourSelector = createSelector( 
    [getToursState], 
    tourPage => tourPage.selectedTour
) 
export const isSucceedTOurSelector = createSelector( 
  [getToursState], 
  tourPage => tourPage.isSucceed
) 
export const getTourCommentsSelector= createSelector( 
  [getToursState], 
  tourPage => tourPage.comments
)