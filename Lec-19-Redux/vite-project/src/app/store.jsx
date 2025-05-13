
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice"
import todoReducer from "../features/Todo/todoSlice"
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    todo:todoReducer
  },
})

