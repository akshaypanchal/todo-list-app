const ADD_DATA_TO_TODOLIST = "ADD_DATA_TO_TODOLIST";
const REMOVE_DATA_FROM_TODOLIST = "REMOVE_DATA_FROM_TODOLIST";


// Declaring the action functions
const addItemsInTodoList = (data) =>{
    return {
        type:ADD_DATA_TO_TODOLIST,
        data:data
    }
}

const removeItemsInTodoList = () =>{
    return {
        type:REMOVE_DATA_FROM_TODOLIST,
    }
}

export default addItemsInTodoList;