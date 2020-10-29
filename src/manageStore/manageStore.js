import { createStore } from 'redux';


// Declaring action type constant
const ADD_DATA_TO_TODOLIST = "ADD_DATA_TO_TODOLIST";
const REMOVE_DATA_FROM_TODOLIST = "REMOVE_DATA_FROM_TODOLIST";


// creating the default state with empty array for todo item array
const defaultState = {
    todoItemsArray: []
}

// Creating the reducer for catching all the action objects and do the operation
const setTodoListItemData = (state = defaultState, action) => {

    switch (action.type) {
        // declared case for adding the item in todo list item array
        case ADD_DATA_TO_TODOLIST:
            return {
                todoItemsArray: [...state.todoItemsArray, action.data]
            }

        // declared case for removing the selected items from the todo list array
        case REMOVE_DATA_FROM_TODOLIST:
            let itemValue = action.data.item;
            const index = state.todoItemsArray.indexOf(itemValue);
            state.todoItemsArray.splice(index, 1);
            // console.log(state.todoItemsArray);
            console.log(state);
            // return newState;
            return {
                todoItemsArray: [state.todoItemsArray]
            }


        default:
            return state;
    }


}

// for use of redux extension tool
const store = createStore(setTodoListItemData,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;