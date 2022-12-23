import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import searchInfoReducer from './modules/searchInfo';
import fetchSigunguReducer from './modules/fetchSigungu';
import fetchTourListReducer from './modules/fetchTourList';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  searchInfo: searchInfoReducer,
  fetchsigungu: fetchSigunguReducer,
  fetchTourlist: fetchTourListReducer,
});

const rootStore = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default rootStore;
