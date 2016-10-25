import React from "react";
import {combineReducers} from 'redux';
import TodosReducer from './todos_reducer.js';

const rootReducer = combineReducers({
  todos: TodosReducer
});


export default rootReducer;
