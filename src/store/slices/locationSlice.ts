import { createSlice } from '@reduxjs/toolkit'

interface LocationState {
  locations: Location[]
}
type Location = {
  name: string
  formatted_address: string
  display_address: string
}
const initialState: LocationState = {
  locations: [],
}
export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocations: (state = initialState, action:any) => {
      const locations = [{
        name: 'Best Test Electronics Super Store',
        formatted_address: '321 West Avenue Brooklyn, NY 11224',
        display_address: '321 West Avenue',
      },{
        name: 'Best Test Electronics Super Store',
        formatted_address: '654 West Montague St Brooklyn, NY 11201',
        display_address: '654 West Montague St',
      }]  
      return {...state, locations }
    }
  },
})

// Action creators are generated for each case reducer function
export const {} = locationSlice.actions

export default locationSlice.reducer