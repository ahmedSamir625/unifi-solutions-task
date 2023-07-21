import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/reducers/todoSlice.js";
import themeReducer from "../redux/reducers/themeSlice.js";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
});
