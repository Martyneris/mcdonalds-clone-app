import * as types from './types';
import axios from 'axios';

export function fetchMenu () {
  // darom uzklausa i back-end/ Node
    return async function(dispatch){
       const res = await axios.get('/api/menu')
       console.log(res.data);
       dispatch({
           type:types.FETCH_MENU,
           payload:res.data
       })
    }
}

export function addMenuItem(formData){
    console.log(formData);
    return async function(dispatch){
        const res = await axios.post('/api/menu', formData);
        console.log(res);
        dispatch({
          type:types.ADD_MENU_ITEM,
          payload:res.data
        })
    }    
}

export function removeItem(id){
    console.log(id);
    return async function (dispatch) {
        try{
           const res = await axios.delete('/api/menu/'+id);
           console.log(res);
           dispatch({
             type:types.REMOVE_MENU_ITEM,
             payload:res.data._id
           })
        }catch(err){

        }
    }   
}