import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './slices/locationSlice'
import modalWrapperReducer from './slices/modalWrapperSlice'

const store = configureStore({
   reducer: {
      location: locationReducer,
      modal: modalWrapperReducer,
   },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store