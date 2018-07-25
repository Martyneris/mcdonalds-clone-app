import * as types from '../actions/types';

export default (state = [], action) => {
    console.log(action.payload);
    
    switch (action.type) {
        case types.NEW_ORDER:return [...state, action.payload];
        default: return state;
    }
}