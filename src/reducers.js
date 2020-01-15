// import { combineReducers } from 'redux';
import { DELETE_ITEM, ADD_ITEM, MASS_ADD, UPDATE_ITEM } from './actions';

const initialState = {
    books: []
}

// name of reducer has to be the same as the name of the state item that is being changed
function bookApp(state = initialState, action){
    switch(action.type){
        case DELETE_ITEM:{
            let books = [...state.books];
            books.splice(action.index, 1);
            return { books };
        }
        case ADD_ITEM:
            return {
                books: [
                ...state.books,
                 action.book
                ]
            };
        case MASS_ADD:
            return {
                books: action.bookArr
            };
        case UPDATE_ITEM:
            let temp = [...state.books];
            temp[action.index] = action.book;
            return { books: temp };
        default:
            return state;
    }
}

// const bookApp = combineReducers({
//     books
// });

export default bookApp;