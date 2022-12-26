import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import searchInfoReducer from './modules/searchInfo';
import fetchSigunguReducer from './modules/fetchSigungu';
import fetchTourListReducer from './modules/fetchTourList';
import fetchByDistanceReducer from './modules/fetchByDistance';
import thunk from 'redux-thunk';
import userReducer from './modules/users';

const rootReducer = combineReducers({
  searchInfo: searchInfoReducer,
  fetchsigungu: fetchSigunguReducer,
  fetchTourlist: fetchTourListReducer,
  fetchByDistance: fetchByDistanceReducer,
  user: userReducer,
});

const rootStore = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default rootStore;
