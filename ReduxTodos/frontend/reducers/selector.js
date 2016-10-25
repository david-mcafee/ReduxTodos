import React from 'react';

export const allTodos = ({todos}) =>{
  // debugger;
  Object.keys(todos).map(id => todos[id]);

  // const totalTodos = Object.keys(state.todos);
  // return totalTodos.map(todo => todos[id])
};
