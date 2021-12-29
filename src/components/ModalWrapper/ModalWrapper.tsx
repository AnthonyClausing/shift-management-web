 /** @jsxImportSource theme-ui */
import React from 'react';
import { useSelector, RootStateOrAny, shallowEqual, useDispatch } from 'react-redux';
import { ThemeUICSSObject } from 'theme-ui'
import ModalHeader from "../modal/ModalHeader"
import ModalBody from "../modal/ModalBody"
import ModalFooter from "../modal/ModalFooter"
interface ModalProps {
    onClose?: () => void
    onConfirm?: () => void
    onCancel?: () => void
    title: string
}

const ModalWrapper : React.FC<ModalProps> = (props) => {
    const modalState = useSelector((state:RootStateOrAny) => state.modal, shallowEqual)
    const dispatch = useDispatch()
    const handleOnClose = () => {
      dispatch({type: "modal/hideModal", payload: false})
    };

    const modalContentStyles: ThemeUICSSObject = {
        backgroundColor: '#FEFEFE',
        margin: '15% auto',
        padding: '20px',
        border: '1px solid #888',
        width: '80%'
    }
    const modalStyles: ThemeUICSSObject = {
        display: modalState.show ? 'block' : 'none',
        position: 'fixed',
        zIndex: '1000',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0, 0.4)',
    }
    const closeStyles: ThemeUICSSObject = {
        color: '#aaa',
        float: 'right',
        fontSize: 5,
        fontWeight: 'bold',
        '&:hover': {
            color: "black",
            textDecoration: "none",
            cursor: "pointer",
        },
        '&:focus': {
            color: "black",
            textDecoration: "none",
            cursor: "pointer"
        }
    }
    return ( modalState.show &&
        (<div sx={modalStyles}>
            <div sx={modalContentStyles}>           
            <ModalHeader>
                {<span sx={closeStyles} onClick={() => handleOnClose()}>&times;</span>}
            </ModalHeader>
            <ModalBody>
                <p>Some text in the Modal..</p>
            </ModalBody>
            <ModalFooter>
                <button onClick={() => handleOnClose()}>Click me to confirm</button>
            </ModalFooter>
            </div>
        </div>)

    );
};

export default ModalWrapper