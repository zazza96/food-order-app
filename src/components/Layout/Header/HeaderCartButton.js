import React, {Fragment, useContext, useEffect, useState} from "react";
import Button from "../../General_UI/Button/Button";
import classes from "./HeaderCartButton.module.css"
import CartIcon from "../../../assets/images/CartIcon";
import CartContext from "../../store/cart-context";


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const [btnHighlighted, setBtnHighlighted] = useState(false);    

    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((currentNbr,item) => {
        return currentNbr + item.amount;
    },0);

    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0 ) {
            return;
        }
        setBtnHighlighted(true);

        const timer = setTimeout(()=>{ setBtnHighlighted(false) } , 300);

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
    <Button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </Button>
    )
}

export default HeaderCartButton;