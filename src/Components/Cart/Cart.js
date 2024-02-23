import React, { useContext } from "react";
import style from './Cart.module.css'
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../Store/Cart-Context";
const Cart = props => {
    const cartCtx = useContext(CartContext)

    const totalAmount = cartCtx.totalAmount + 'rs'
    const hasItems = cartCtx.items.length > 0

    const cartItemRemovedHandler = id => {
        cartCtx.removeItem(id)

    }
    const cartFullItemRemovedHandler = id => {
        console.log(id)
        cartCtx.removeFullItem(id)

    }
    const cartItemAddHandler = item => {
        cartCtx.addItem(item)
    }

    const cartItems = (<ul className={style['cart-items']}>
        {cartCtx.items.map((item) => (<CartItem key={item.id} name={item.name} amount={item.amount}
            price={item.price} onFullRemove={() => cartFullItemRemovedHandler(item.id)} onRemove={() => cartItemRemovedHandler(item.id)} onAdd={() => cartItemAddHandler(item)} />))}
    </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={style.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={style.actions}>
                <button onClick={props.onClose} className={style['button--alt']}>Close</button>
                {hasItems && <button className={style.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart