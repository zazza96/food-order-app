import React, {Fragment} from "react";
import Button from "../../General_UI/Button/Button";
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../../../assets/images/CartIcon";


const HeaderCartButton = props => {
    return (
    <Button className={classes.button}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>5</span>
    </Button>
    )
}

export default HeaderCartButton;