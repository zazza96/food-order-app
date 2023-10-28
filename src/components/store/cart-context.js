import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0, // Corrected typo here
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContext;