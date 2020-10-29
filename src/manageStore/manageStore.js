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
            let itemValue = action.data.item;
            const index = state.todoItemsArray.indexOf(itemValue);
             state.todoItemsArray.splice(index,1);
            // console.log(state.todoItemsArray);
            console.log(state);
            // return newState;
            return {
                todoItemsArray: [ state.todoItemsArray ]
            }
            
            
        default:
            return state;
    }


}

const store = createStore(setTodoListItemData,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;