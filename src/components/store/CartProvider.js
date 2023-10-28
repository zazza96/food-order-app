import { useReducer } from "react";

import CartContext from "./cart-context";

//functions outside of main function because it doesn't need to be reacreated each time the component is created/called
const defaultCartState = {
    items: [],
    totalAmount: 0, // Corrected typo here
}

const cartReducer = (state, action) =>{
    if (action.type === "ADD") {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    } 
    else if (action.type === "REMOVE") {
        const updatedItems = state.items.concat(action.item);
    }
    return defaultCartState;
};

export default (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD", item: item})
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "REMOVE", id: id})
    };

    const cartContext = {
        items: [],
        totalAmount: 0, // Corrected typo here
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}