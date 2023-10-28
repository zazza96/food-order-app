import react, {Fragment} from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = props => {
    const portalEl = document.getElementById('overlays');
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portalEl)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalEl)}

    </Fragment>
}

const Backdrop = props => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
}

export default Modal;