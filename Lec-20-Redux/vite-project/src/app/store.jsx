
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice"
import todoReducer from "../features/Todo/todoSlice"
import userReducer from "../features/User/userSlice"
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    todo:todoReducer,
    user:userReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

