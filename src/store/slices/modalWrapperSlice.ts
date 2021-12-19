import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../'

interface ModalWrapperState {
  show: boolean;
}
const initialState: ModalWrapperState = {
    show: false
};

const modalWrapperSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state = initialState, action:any) => {
      return {
        ...state,
        show: true,
      };
    },
    hideModal: (state = initialState, action: any) => {
      return {...state, show: false};
    }
  }
})
export const {showModal, hideModal} = modalWrapperSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getShow = (state: RootState) => state.modal.show
export default modalWrapperSlice.reducer;