import React, {Fragment, useContext} from "react";
import Button from "../../General_UI/Button/Button";
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../../../assets/images/CartIcon";
import CartContext from "../../store/cart-context";


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    

   const numberOfCartItems = cartCtx.items.reduce((currentNbr,item) => {
        return currentNbr + item.amount;
    },0);


    return (
    <Button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </Button>
    )
}

export default HeaderCartButton;