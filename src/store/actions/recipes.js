
import * as actionTypes from './actionTypes';

import axios from 'axios';

const fetchRecipesGivenIngs = (recipes) => {
    return {
        type: actionTypes.FETCH_RECIPES_GIVEN_INGS,
        recipes: recipes
    };
}

export const fetchRecipes = (itemsString) => {
    return dispatch => {
        const url = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=d5a7b67bc1ad43c0a124f6a3b4fc38d0&ingredients=' + itemsString + '&number=15';
        axios.get(url)
            .then(
                response => {
                    dispatch(fetchRecipesGivenIngs(response.data));
                })
            .catch(error => {
                console.log(error);
            });
    }
}
