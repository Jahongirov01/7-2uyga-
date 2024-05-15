import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodo: (state, { payload }) => {
      const filterTodo = state.todos.filter((itme) => itme.id !== payload);
      state.todos = filterTodo;
    },
    changeStateTodo: (state, { payload }) => {
      const item = state.todos.find((itme)=>item.id == payload)
      
    },
  },
});

export const { addTodo, removeTodo, changeStateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;