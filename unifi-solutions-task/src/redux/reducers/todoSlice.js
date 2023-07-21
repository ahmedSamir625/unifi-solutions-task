import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Todo 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  {
    id: "2",
    title: "Todo 2",
    desc: "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.push(payload);
    },

    removeTodo: (state, { payload }) => {
      state.splice(
        state.findIndex((item) => item.title === payload.todoTitle),
        1
      );
    },

    archiveTodo: (state,{payload}) => {
      state.forEach((item) => {
        if (item.title === payload.todoTitle) {
          item["isArchived"] = payload.isArchived;
          item["archivedAt"] = payload.archivedAt;

        }
      });
    },

    checkTodo: (state, { payload }) => {
      state.forEach((item) => {
        if (item.title === payload.todoTitle) {
          item["isChecked"] = payload.isChecked;
          item["checkedAt"] = payload.checkedAt;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, archiveTodo, checkTodo } = todoSlice.actions;

export default todoSlice.reducer;
