import { combineReducers } from 'redux';
import { DELETE_ITEM, ADD_ITEM, MASS_ADD } from './actions';

const initialState = {
    books: []
}

// name of reducer has to be the same as the name of the state item that is being changed
function books(state = initialState.books, action){
    switch(action.type){
        case DELETE_ITEM:{
            let temp = [];
            state.forEach( (bk,i) => {
                if(action.index !== i){
                    temp.push(bk);
                } 
            });
            return temp;
        }
        case ADD_ITEM:
            return [
                ...state,
                 action.book
            ];
        case MASS_ADD:
            return action.bookArr
        default:
            return state;
    }
}

const bookApp = combineReducers({
    books
});

export default bookApp;