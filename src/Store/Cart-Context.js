import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },
    removeFullItem: (id) => { },
    clearCart: () => { }

})

export default CartContext