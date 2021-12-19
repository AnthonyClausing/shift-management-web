import React, { lazy, Suspense, useEffect, useState } from 'react';
import classNames from 'classnames'
// import { Spinner, SpinnerSize } from 'yourAtomicComponentslib';

import ModalHeader from "../modal/ModalHeader"
import ModalBody from "../modal/ModalBody"
import ModalFooter from "../modal/ModalFooter"
import "../../stylesheets/Modal.css"
import { useSelector, RootStateOrAny, shallowEqual, useDispatch } from 'react-redux';
interface ModalProps {
    onClose?: () => void
    onConfirm?: () => void
    onCancel?: () => void
    title: string
}
interface ModalState {
    componentPath: string
    title: string
    size: string,
    isExitable: boolean,
    withButtons?: boolean
}
const ModalWrapper : React.FC<ModalProps> = (props) => {
    const modalState = useSelector((state:RootStateOrAny) => state.modal, shallowEqual)
    let displayClassNames = classNames({'modal': true, 'open': modalState.show})
    const dispatch = useDispatch()
    const handleOnClose = () => {
      dispatch({type: "modal/hideModal", payload: false})
    };

    return ( modalState.show &&
        (<div className={displayClassNames}>
            <div className="modal-content">           
            <ModalHeader>
                {<span className="close" onClick={() => handleOnClose()}>&times;</span>}
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