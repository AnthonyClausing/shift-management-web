import { createSlice } from '@reduxjs/toolkit'

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    locations: [],
  },
  reducers: {},
})

// Action creators are generated for each case reducer function
export const {} = locationSlice.actions

export default locationSlice.reducer