
import * as actionTypes from './actionTypes';
import axios from 'axios';

const setSearchIngredients = (searchValues) => {
    return {
        type: actionTypes.SET_SEARCH_INGREDIENTS,
        searchValues: searchValues
    };
}

const setSearchIngredientsFailed = () => {
    return {
        type: actionTypes.SET_SEARCH_INGREDIENTS_FAILED
    };
}

export const searchIngs = (searchVal) => {
    return dispatch => {
        axios.get('https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=d5a7b67bc1ad43c0a124f6a3b4fc38d0&query=' + searchVal + '&number=15&metaInformation=true')
            .then(
                response => {
                    dispatch(setSearchIngredients(response.data))
                })
            .catch(error => {
                dispatch(setSearchIngredientsFailed(error))
            });
    }
}

const fetchIngredientDetails = (ingredientDetails) => {
    return {
        type: actionTypes.FETCH_INGREDIENT_DETAILS,
        ingredientDetails: ingredientDetails
    };
}

const fetchIngredientDetailsFailed = (error) => {
    return {
        type: actionTypes.FETCH_INGREDIENT_DETAILS_FAILED,
        error: error
    };
}

export const fetchIngsDetails = (ingredientId) => {
    return dispatch => {
        const url = 'https://api.spoonacular.com/food/ingredients/' + ingredientId + '/information?apiKey=d5a7b67bc1ad43c0a124f6a3b4fc38d0&amount=1'
        axios.get(url)
            .then(
                response => {
                    dispatch(fetchIngredientDetails(response.data))
                })
            .catch(error => {
                dispatch(fetchIngredientDetailsFailed(error))
            });
    }
}
