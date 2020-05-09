
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    recipes: []
}

const fetchRecipesGivenIngs = (state, action) => {
    const updatedState = { recipes: action.recipes };
    return { ...state, ...updatedState };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_RECIPES_GIVEN_INGS: return fetchRecipesGivenIngs(state, action);
        default: return state;
    }
}

export default reducer;
