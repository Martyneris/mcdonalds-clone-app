
export default (state=[],action)=>{
    console.log(action);
    
    if (action.type === 'FETCH_CATEGORIES'){
        return action.payload
    }
    return state
};