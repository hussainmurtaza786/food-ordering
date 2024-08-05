import React, { useContext, useState } from "react";
import style from './Cart.module.css'
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../Store/Cart-Context";
import Checkout from "./Checkout";
const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
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
    const orderHandler = () => {
        setIsCheckout(true)
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true)
        await fetch('https://react-http-c8f4f-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clearCart()
    }

    const modalAction = <div className={style.actions}>
        <button onClick={props.onClose} className={style['button--alt']}>Close</button>
        {hasItems && <button onClick={orderHandler} className={style.button}>Order</button>}
    </div>


    const cartModalContent = <React.Fragment>
        {cartItems}
        <div className={style.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
        {!isCheckout && modalAction}
    </React.Fragment>

    const isSubmittingModalContent = <p> Sending order data... </p>


    const didSubmitModalContent = <React.Fragment>
        <p>Successfully send the Order </p>
         <div className={style.actions}>
            <button onClick={props.onClose} className={style.button}>Close</button>
        </div>
    </React.Fragment>
    return (
        <Modal onClose={props.onClose}>

            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>

    )
}

export default Cart