import React from "react";
import style from './Header.module.css'
import mealsimage from '../../assest/meals.jpg'
import HeaderCartBUtton from "./HeaderCartButton";
import AvailableMeals from "../Meals/AvailableMeals";

const Header = props => {
    return (
        <React.Fragment>
            <header className={style.header}>
                <h1>OurMeals</h1>
                <HeaderCartBUtton onClick={props.onShowCart} />

            </header>
            <div className={style['main-image']}>
                <img src={mealsimage} alt="Meal Is Here" />
            </div>

        </React.Fragment>
    )
}
export default Header 