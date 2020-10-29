const ADD_DATA_TO_TODOLIST = "ADD_DATA_TO_TODOLIST";
const REMOVE_DATA_FROM_TODOLIST = "REMOVE_DATA_FROM_TODOLIST";


// Declaring the action functions
export const addItemsInTodoList = (data) =>{
    return {
        type:ADD_DATA_TO_TODOLIST,
        data:data
    }
}

export const removeItemsInTodoList = (data) =>{
    return {
        type:REMOVE_DATA_FROM_TODOLIST,
        data:data
    }
}
