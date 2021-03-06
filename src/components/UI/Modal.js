import {Fragment} from 'react';
import {createPortal} from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onCloseCart}/>
}

const ModalOverlay = (props) => {
    return <div className={classes.overlay}>
        <div className={classes.over}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <Fragment>
            {createPortal(<Backdrop onCloseCart={props.onCloseCart}/>,portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
}

export default Modal;