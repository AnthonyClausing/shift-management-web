 /** @jsxImportSource theme-ui */
import React from 'react';
import { useSelector, RootStateOrAny, shallowEqual, useDispatch } from 'react-redux';
import {ModalWrapperState, ModalName} from '@slices/modalWrapperSlice'
import { modalContentStyles, modalContainerStyles, closeStyles } from '@styles/components/modalStyles';

const ModalWrapper : React.FC = () => {
    const modalState: ModalWrapperState = useSelector((state:RootStateOrAny) => state.modal, shallowEqual)
    const dispatch = useDispatch()
    const handleOnClose = () => {
      dispatch({type: "modal/hideModal", payload: false})
    }
    const selectedModal = modalState.name && require('../modals/' + ModalName[modalState.name]).default
    const defaultHeader = () => { return (<><div></div><span sx={closeStyles} onClick={() => handleOnClose()}>&times;</span></>)}
    
    return (
        <div sx={{ ...modalContainerStyles, display: modalState.show ? 'block' : 'none' }}>
           { modalState.show && selectedModal && 
           <>
            <div sx={modalContentStyles}>
                {defaultHeader()}
                {selectedModal.body()}
                {/* <ModalHeader>
                    {selectedModal.header() || defaultHeader()}
                </ModalHeader> */}
                {/* <ModalBody>
                    {selectedModal.body() || <p>Some text in the Modal..</p>}
                </ModalBody> */}
                {/* <ModalFooter>
                    {selectedModal.footer() || <button onClick={() => handleOnClose()}>Click me to confirm</button>}
                </ModalFooter> */}
            </div>
           
           </>

            }
        </div>
    )
}
//emit open/close/cancel events here
//listen for open/close/cancel events anywhere that opens modals
export default ModalWrapper