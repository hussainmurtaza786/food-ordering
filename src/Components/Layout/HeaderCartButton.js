import React, { useContext, useEffect, useState } from "react";
import style from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";

const HeaderCartBUtton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartctx = useContext(CartContext)
    const { items } = cartctx
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClasses = `${style.button} ${btnIsHighlighted ? style.bump : ''}`
    useEffect(() => {
        if (cartctx.items.length === 0) {
            return
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)

        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])
    return (
        <div>
            <button className={btnClasses} onClick={props.onClick}>
                <span className={style.icon}>
                    <CartIcon />
                </span>
                <span>
                    Your Cart
                </span>
                <span className={style.badge}>
                    {numberOfCartItems}
                </span>
            </button>
        </div>
    )
}

export default HeaderCartBUtton