import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch, useStore} from 'react-redux';
import './input.style.css';
import addItemsInTodoList from '../../actions/todoItemActions.component';
import Button from '../button/button.component';

const Input = () =>{
    // declaring the dispatch variable with useDispatch
    const dispatch =  useDispatch();

    const newArray = useSelector(state=>state.todoItemsArray)

    const [input, setInputData] = useState("");

    const handleChange = () =>{
        let data = document.getElementById("addTodoItem").value;
        setInputData(data);
    }   


    const addTodoListData = () =>{

    if(input!=""){    
        dispatch(addItemsInTodoList({input}));
        setInputData("");
        console.log({input});
    }
    else{
        alert("Please add valid input!!!");
    }


    }


    const renderArray = () =>{
        console.log(newArray);
        let buttonComponentArray;
        if(newArray.length >0){
              buttonComponentArray = newArray.map(item=>{
              return   <p key={item.input}>{item.input}</p>
              });

        }

    return <div>{buttonComponentArray}</div>
    
    }

    return (
        <div>
            <h1>Welcome to To-Do List App</h1>
            <input type="text" onChange={handleChange} id="addTodoItem"  value={input} placeholder="Enter the To-Do Item here"/>
            <button type="button" onClick={addTodoListData}>Add Item</button>
            {
                renderArray()
            }

        </div>
    );


}

export default Input;