import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './slices/locationSlice'
import modalWrapperReducer from './slices/modalWrapperSlice'
import userReducer from './slices/userSlice'

const store = configureStore({
   reducer: {
      location: locationReducer,
      user: userReducer,
      modal: modalWrapperReducer,
   },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store