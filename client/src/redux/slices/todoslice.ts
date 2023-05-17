import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { TodoType } from '../../types/TodoTypes';

type InitialState = TodoType[];

const initialState: InitialState = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => [action.payload, ...state],
    deleteTodo: (state, action: PayloadAction<string>) =>
      state.filter((el) => el.id !== action.payload),
    editTodo: (state, action: PayloadAction<TodoType>) =>
      state.map((el) => {
        if (el.id === action.payload.id) return action.payload;
        return el;
      }),
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
