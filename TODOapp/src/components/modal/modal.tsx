import { useState } from 'react';
import './modal.css';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../button/Button';

interface ModalProps {
    containerId: string;
    modal_fn: VoidFunction;
}

export default function Modal(props: ModalProps){
    
    const [status, setStatus] = useState("closed");
    const closeModal:VoidFunction = () => {
        setStatus("closed");
    }

    const openModal:VoidFunction = () => {
        setStatus("open");
    }

    let modalFn:VoidFunction= () => {
        setStatus("open");
    }
    
    let handleSubmit:VoidFunction = () => {
        modalFn();
        closeModal();
    }

    if(props.modal_fn){
        modalFn = props.modal_fn;
    }
    
    return (
        <>
            <div className={`uic-modal ${status === 'open' ? 'uic-modal--open' : ''} `} id={props.containerId}>
                <Button click_fn={closeModal} aria="close modal" cssClass={"uic-modal__close-btn"} >
                    <AiOutlineClose />
                </Button>
                <div className="uic-modal__container">
                    <div className="uic-modal__inpubox">
                        <input type="text" />
                        <Button click_fn={handleSubmit} aria="close modal" cssClass={"uic-modal__moda-fn-btn"} >
                            <>add to do</>
                        </Button>
                    </div>
                </div>
            </div>
            <Button click_fn={openModal} aria="open modal" cssClass={"btn"} >
                <>Add ToDo</>
            </Button>
        </>
    )
}

