import { createSelector } from 'reselect'; 
const getUsersState = state => state.user;

export const getUserEmail = createSelector(
  [getUsersState],
  user => user.email
); 
export const getUserId = createSelector(
    [getUsersState],
    user => user.id
  ); 
  export const getUserName = createSelector(
    [getUsersState],
    user => user.nickname
  );