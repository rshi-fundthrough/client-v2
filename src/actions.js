// This file is for setting up state management with redux

// have a action for when the component first starts up to copy app the things
// one for updating


// constants, action types
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const MASS_ADD = "MASS_ADD";
export const UPDATE_ITEM = "UPDATE_ITEM";

// action creators
export function deleteItem(index){
    return {
        type: DELETE_ITEM, 
        index
    };
}

export function addItem(book){
    return {
        type: ADD_ITEM,
        book
    };
}

export function massAdd(bookArr){
    return {
        type: MASS_ADD,
        bookArr
    }
}

export function updateItem(index, book){
    return {
        type: UPDATE_ITEM,
        book,
        index
    };
}