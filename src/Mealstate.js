import React, { useState } from 'react';

const MealState = () => {
    const todayMeals = [
        { name: 'Baked Beans', calories: 200, id: 1000, eaten: false },
        { name: 'Sweet Corn', calories: 20, id: 1001, eaten: false },
        { name: 'Paneer', calories: 300, id: 1002, eaten: false }
    ];
    const [meals, setMeals] = useState(todayMeals);

    return { meals, setMeals };
};

export default MealState;
