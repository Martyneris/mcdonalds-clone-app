import * as types from './types';

export function addOrder(item) {
    return {
        type:types.ADD_ORDER,
        payload:item
    }
}

export function removeOrder(id){
    return {
        type:types.REMOVE_ORDER,
        payload:id
    }
}

// ------ Admin active orders interface ------

export function newOrder(order){
   return {
       type: types.NEW_ORDER,
       payload:order,
   }
}