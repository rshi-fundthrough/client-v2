// This file is for setting up state management with redux

// constants, action types
export const DELETE_ITEM = "DELETE_ITEM"

// action creators
export function deleteItem(index){
    return {type : DELETE_ITEM, index}
}