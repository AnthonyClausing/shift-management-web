import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../'

export enum ModalName {
  SettingsUsersNew = "SettingsUsersNew",
  SettingsLocationsNew = "SettingsLocationsNew"
}
export interface ModalWrapperState {
  show: boolean
  name: null | keyof typeof ModalName
}
const initialState: ModalWrapperState = {
    show: false,
    name: null,
};

const modalWrapperSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state = initialState, action:any) => {
      //maybe rename to showModalWithProps
      return {
        ...state,
        ...action.payload
      };
    },
    hideModal: (state = initialState, action: any) => {
      return {...state, show: false};
    },
    clearModal: (state = initialState, action: any) => {
      return {
        ...state,
        name: null,
      }
    }
  }
})
export const {showModal, hideModal} = modalWrapperSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getShow = (state: RootState) => state.modal.show
export default modalWrapperSlice.reducer;