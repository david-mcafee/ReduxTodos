import React from 'react';
import {createStore} from 'redux';
import rootReducer from "../reducers/root_reducer.js";
import MasterMiddleware from '../middleware/master_middleware.js';


const preloadedState = {
  todos: {}
};

export const configureStore = (state = preloadedState) => (
  createStore(rootReducer, state, MasterMiddleware)
);
