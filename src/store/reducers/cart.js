
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [],
    totalPrice: 0
}

const addItemToCart = (state, action) => {
    const updatedItem = { ...action.item };
    let updatedItems = [...state.items];
    updatedItems.push(updatedItem);

    const totalPrice = state.totalPrice + (action.item.costValue * action.item.quantity);
    const updatedState = { items: updatedItems, totalPrice: totalPrice };
    return { ...state, ...updatedState };

}

const removeItemfromCart = (state, action) => {
    const item = action.item;
    let updatedItems = { ...state.items };
    updatedItems.remove(item);
    return { ...state, ...updatedItems };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM_TO_CART: return addItemToCart(state, action);
        case actionTypes.REMOVE_ITEM_FROM_CART: return removeItemfromCart(state, action);
        default: return state;
    }
}

export default reducer;
