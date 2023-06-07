import { createSelector } from 'reselect';
const getAppState = state => state.app;

export const getError = createSelector(
  [getAppState],
  app => app.error
);