import {createStore} from 'redux';


// Declaring action type constant
const ADD_DATA_TO_TODOLIST = "ADD_DATA_TO_TODOLIST";
const REMOVE_DATA_FROM_TODOLIST = "REMOVE_DATA_FROM_TODOLIST";


const defaultState = {
    todoItemsArray : []
}


const setTodoListItemData = (state=defaultState, action)=>{

    switch(action.type){
        case ADD_DATA_TO_TODOLIST: 
                return {
                    todoItemsArray:[...state.todoItemsArray, action.data]
                }
        case REMOVE_DATA_FROM_TODOLIST:
            return state;
        default:
            return state;
    }


}

const store = createStore(setTodoListItemData,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;