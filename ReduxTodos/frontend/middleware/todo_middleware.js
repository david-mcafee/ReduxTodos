import React from 'react';
import { REQUEST_TODOS, RECEIVE_TODOS} from "../actions/todo_actions";
import {receiveTodos} from "../actions/todo_actions";
import {fetchTodos} from '../util/todo_api_util';

const TodoMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case REQUEST_TODOS:
      const success = receiveTodos();
      const error = e => console.log(e);
      fetchTodos(success, error);
      break;
    default:
      return next(action);
  }
};

export default TodoMiddleware;
