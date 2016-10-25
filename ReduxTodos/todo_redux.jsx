import React from 'react';
import ReactDOM from 'react-dom';
import { fetchTodos } from './frontend/util/todo_api_util';
import {configureStore} from './frontend/store/store';
import { requestTodos, receiveTodos } from "./frontend/actions/todo_actions";
import {allTodos} from "./frontend/reducers/selector";

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById("content");
  const store = configureStore();
  ReactDOM.render(<h1>Todos App</h1>, root);

  //TODO delete
  window.store = store;
  window.requestTodos = requestTodos;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  // window.success = data => console.log(data);
  // window.error = e => alert(e);
  // window.fetchTodos = fetchTodos;
});
