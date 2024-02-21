import React from 'react';
import {useMealsListContext} from "./MealsProvider"

const MealsList= () =>{
    const {meals}=useMealsListContext();
    return(
        <div>
                <h3>Meals List</h3>
                {
                    meals.map((meal,index)=>(
                        <h2 key={index}>{meal}</h2>
                    )
                    )
                }
        </div>

    )
}

export default MealsList; 