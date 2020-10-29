import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './input.style.css';
import { addItemsInTodoList, removeItemsInTodoList } from '../../actions/todoItemActions.component';

const Input = () => {
    // declaring the dispatch variable with useDispatch
    const dispatch = useDispatch();
    let itemArray;

    // fetching the latest todo list item array from the store
    const newArray = useSelector(state => state.todoItemsArray)

    // delcared state with input variable for storing the input field value
    const [input, setInputData] = useState("");

    // declared function for handle the input field value and update the input value in local store
    const handleChange = () => {
        let data = document.getElementById("addTodoItem").value;
        setInputData(data);
    }

    // declared function for dispatching the action object for adding items in the global store todo list item array
    const addTodoListData = () => {
        // checking for the condition is input value is not empty in order to dispatch the action object
        if (input !== "") {
            dispatch(addItemsInTodoList({ input }));
            setInputData("");
        }
        else {
            alert("Please add valid input!!!");
        }


    }

    // declared function for rendering all the items from todo list item array and also attached button with remove items actions object
    const renderArray = () => {
        if (newArray.length > 0) {
            itemArray = newArray.map((item, index) => {
                return (
                    <div key={item} >
                        <p key={index}>{item.input}</p>
                        <button key={index} onClick={() => dispatch(removeItemsInTodoList({ item }))}>Remove the Item</button>
                        <hr key={index} />
                    </div>
                );
            });

        }

        return <div>{itemArray}</div>

    }

    return (
        <div>
            <h1>Welcome to To-Do List App</h1>
            <input type="text" onChange={handleChange} id="addTodoItem" value={input} placeholder="Enter the To-Do Item here" />
            <button type="button" onClick={addTodoListData}>Add Item</button>
            {
                renderArray()
            }

        </div>
    );


}

export default Input;