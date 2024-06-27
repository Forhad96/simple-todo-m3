import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};
type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions: PayloadAction<TTodo>) => {
      state.todos.push({ ...actions.payload, isCompleted: false });
    },
    removeTodo: (state, actions: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== actions.payload);
    },
    toggleTodoState: (state, actions: PayloadAction<string>) => {
      const todo = state.todos.find((item) => item.id === actions.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});

export const { addTodo, removeTodo,toggleTodoState } = todoSlice.actions;

export default todoSlice.reducer;
