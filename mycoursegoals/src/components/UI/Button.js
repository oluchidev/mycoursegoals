import React from 'react';
import classes from './Button.module.css';
const Button = (props) => {
return ( 
<button 
type={props.type || 'submit'} 
className={classes.btn} 
onClick={props.onClick} 
>{props.children}</button>
)
}

export default Button;