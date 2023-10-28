import { useContext } from "react";

import classes from "./Cart.module.css";
import Button from "../General_UI/Button/Button"
import Modal from "../General_UI/Modal/Modal";
import CartContext from "../store/cart-context";

export default (props) => {

    const cartItems = <ul className={classes['cart-items']}>
        {[{id: "c1",name: 'sushi', amount: "2", price: "2.09"}].map((item) => <li key={Math.random()}>item.name</li>)}
    </ul>

    return (<Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>45.21</span>
        </div>
        <div className={classes.actions}>
           <Button className={classes["button--alt"]} onClick={props.onClose}>Close</Button>
           <Button className={classes.button}>Order</Button>

        </div>
    </Modal>

    )

}