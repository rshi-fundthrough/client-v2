import { combineReducers } from 'redux';
import { DELETE_ITEM, ADD_ITEM } from './actions';

// name of reducer has to be the same as the name of the state item that is being changed
function books(state = [], action){
    switch(action.type){
        case DELETE_ITEM:{
            let temp = []
            state.forEach((bk, i) => {
                if(i !== action.index){
                    temp.push(bk); // this is pass by ref but we aren't changing any values so should be fine
                }
            });
            return temp;
        }
        case ADD_ITEM:
            return [
                ...state,
                action.book
            ];
        default:
            return state;
    }
}

const bookApp = combineReducers({
    books
});

export default bookApp;