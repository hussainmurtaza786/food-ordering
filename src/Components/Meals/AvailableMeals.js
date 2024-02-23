import React, { useDebugValue } from "react";
import style from './AvailableMeals.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Biryani',
        description: 'Fragrant, flavorful rice dish',
        price: 220,
        img: "https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg"
    },
    {
        id: 'm2',
        name: 'Pizza',
        description: 'Delicious cheesy slices of joy',
        price: 780,
        img: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
    },
    {
        id: 'm3',
        name: ' Zinger Burger',
        description: 'Spicy, crispy chicken delight',
        price: 560,
        img:"https://openmenupk.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/11/28064226/zinger-burger.jpg"
    },
    {
        id: 'm4',
        name: 'French Fries',
        description: 'Golden crispy potato delight',
        price: 150,
        img:"https://images.immediate.co.uk/production/volatile/sites/30/2021/03/French-fries-b9e3e0c.jpg?quality=90&resize=556,505"
    },
];
const AvailableMeals = props => {
    const mealsList = DUMMY_MEALS.map((meal) => {
        console.log(meal);
        return <MealItem id={meal.id} key={meal.id} name={meal.name}
            description={meal.description} price={meal.price} img={meal.img} />
    }
    )

    return (

        <section className={style.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals