import * as types from '../actions/types';
import _ from 'lodash';

export default (state=[],action)=>{
    switch (action.type) {
            case types.ADD_ORDER :
            const dublicate = _.find(state, {_id:action.payload._id});
            if (!dublicate)  return [...state, { ...action.payload,count:1}];

            return state.map((order)=>{
             if(order._id===action.payload._id){
                order.count++ 
                return order
             } else {
                 return order
             }
            });

            case types.REMOVE_ORDER : 
            return state.filter((order)=>{
            if(order._id===action.payload){
                order.count--;
                if(order.count===0){
                    return false
                }
                return order
            } else {
                return order
            }
            })
            
        default: 
            return state
    }
}