import { MEALS } from "../../data/dummy-data";
import {Children} from 'react';
import {Toggle} from '../actions/mealsAction';
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
    console.log(action.type)
    console.log(Toggle)
    switch (action.type) {
        case "TOGGLE_FAVORITE":
            console.log('pass')
            const findMeals = state.favoriteMeals.findIndex((check) => {
                return (check.id == action.mealId)
            })
            if(findMeals >= 0){
                const updatestate = [...state.favoriteMeals]
                updatestate.splice(findMeals, 1)
                return{
                    ...state,
                    favoriteMeals : updatestate
                }
            }else{
                const updatestate = state.meals.find((meal) => {return (meal.id === action.mealId)})
                return {...state, favoriteMeals: state.favoriteMeals.concat(updatestate)}
            }
        default:
            return {
                ...state
            }
    }
}
export default mealsReducer;