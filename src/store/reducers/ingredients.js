
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    searchValues: null,
    ingredientDetails: null
}

const setSearchIngredients = (state, action) => {
    const updatedSearchvalues = { searchValues: action.searchValues };
    return { ...state, ...updatedSearchvalues };
}

const setSearchIngredientsFailed = (state, action) => {
    const updatedSearchvalues = { error: true };
    return { ...state, ...updatedSearchvalues };
}

const fetchIngredientDetails = (status, action) => {
    const updatedIngredientDetails = { ingredientDetails: action.ingredientDetails };
    return { ...status, ...updatedIngredientDetails };
}

const fetchIngredientDetailsFailed = (status, action) => {
    const updatedIngredientDetails = { error: true };
    return { ...status, ...updatedIngredientDetails };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_INGREDIENTS: return setSearchIngredients(state, action);
        case actionTypes.SET_SEARCH_INGREDIENTS_FAILED: return setSearchIngredientsFailed(state, action);
        case actionTypes.FETCH_INGREDIENT_DETAILS: return fetchIngredientDetails(state, action);
        case actionTypes.FETCH_INGREDIENT_DETAILS_FAILED: return fetchIngredientDetailsFailed(state, action);
        default: return state;
    }
}

export default reducer;
