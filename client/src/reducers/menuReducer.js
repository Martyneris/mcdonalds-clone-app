import * as types from '../actions/types';

export default (state=[],action)=>{
    switch(action.type){
        case types.REMOVE_MENU_ITEM :
        const newMenu = state.filter((item)=>{
            return item._id !== action.payload
        });
        return newMenu;
        case types.ADD_MENU_ITEM :
        return [...state,action.payload];
        case types.FETCH_MENU:
          return action.payload;
        default : return state;
    }
}