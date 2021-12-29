import React from 'react';
import ModalWrapper from './ModalWrapper/ModalWrapper'

//props take modal details
    // onClose function
    // onConfirm function
    // onCancel function
    //maybe other settings like if close on backdrop click, etc.
interface ModalProps {
    onClose?: () => void
    onConfirm?: () => void
    onCancel?: () => void
    title: string
}
const handDown: ModalProps = {
    title: "hellooooo",
}

function ModalBus(props: any){
    return (<ModalWrapper {...handDown}></ModalWrapper>)
}

export default ModalBus