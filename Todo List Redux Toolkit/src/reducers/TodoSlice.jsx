import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        name: action.payload.task,
      };
      state.push(newTask);
    },

    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    toggleTasks: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTasks } = todoSlice.actions;
export default todoSlice.reducer;
