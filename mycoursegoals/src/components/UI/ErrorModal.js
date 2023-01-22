import React from 'react';
import classes from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card';

const ErrorModal = (props) => {
return(
    <div>
        <div className={classes.overlay} onClick={props.onConfirm}/>
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.message}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.footer}>
            <Button onClick={props.onConfirm}>okay</Button>
        </footer>
    </Card>
    </div>
)
}

export default ErrorModal;