import React, { useContext } from "react";
import style from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-Context";
const MealItem = (props) => {
    const cartCtx = useContext(CartContext)

    const price = props.price + 'rs'

    const addTOCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return (
        <li className={style.meal}>

            {/* <img src={props.image} width={'100px'} alt="" /> */}
            <div>
                <h3> {props.name}</h3>
                <div className={style.description}> {props.description} </div>
                <div className={style.price}> {price} </div>
            </div>

            <div>
                <MealItemForm onAddTOCart={addTOCartHandler} />
            </div>
        </li>
    )
}

export default MealItem