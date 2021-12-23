import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  users: User[]
}
export type User = {
    id: number,
    email: string
    firstName: string
    lastName: string
    phone: string
}
const initialState: UserState = {
  users: [],
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers: (state = initialState, action:any) => {
      const users = [{ id: 1, email: 'owner@besttest.com', firstName: 'OwnerOf', lastName: 'BestTest', phone: '347-555-1234'}, 
      { id: 2, email: 'manager@besttest.com', firstName: 'ManagerOf', lastName: 'BestTest', phone: '347-555-3456'},
       { id: 3, email: 'employee@besttest2.com', firstName: 'EmployeeOf', lastName: 'BestTestTwo', phone: '347-555-7890'}]
      return {...state, users }
    }
  },
})

// Action creators are generated for each case reducer function
export const {} = userSlice.actions

export default userSlice.reducer