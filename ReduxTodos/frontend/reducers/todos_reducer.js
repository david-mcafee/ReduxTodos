import React from "react";
import { REQUEST_TODOS, RECEIVE_TODOS } from "../actions/todo_action";

const defaultState = {
  "1": {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  "2": {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};


const TodosReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case REQUEST_TODOS:

    case RECEIVE_TODOS:
      // dispatch action for it to happen / should update state

    default:
      return state;
  }
};

export default TodosReducer;
