import * as types from './types';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export function login(data, history) {
    return async function (dispatch) {
        try {
            // daroma uzklausa i backend -->  /api/login
            const res = await axios.post('/api/login', data);
            // issaugomas token i local storage
            localStorage.setItem('jwt-token', 'Bearer ' + res.data)
            console.log(res);
            // naudojant tokena istraukiamas user
            const user = jwt.decode(res.data);
            console.log(user);
            history.push('/admin');
            dispatch({
                type: types.LOG_IN,
                payload: user
            })
        } catch (err) {
            console.log(err.response);
            //issiunciam errorus
            dispatch({
                type: types.GET_ERRORS,
                payload: err.response.data
            })
        }
    }
};

export function setUser(user) {
    return {
        type: types.LOG_IN,
        payload: user
    }
}

export function logout() {
    // reikia istrinti token is local storage
    localStorage.removeItem('jwt-token');
    return {
        type: types.LOG_OUT,
    }
}