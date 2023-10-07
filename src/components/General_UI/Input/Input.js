import React from "react";

import classes from "./Input.module.css";

export default (props) => {

    return ( <div className={classes.input}>
            <label htmlFor={props.label.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    )
}