import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './input.style.css';
import {addItemsInTodoList, removeItemsInTodoList} from '../../actions/todoItemActions.component';

const Input = () =>{
    // declaring the dispatch variable with useDispatch
    const dispatch =  useDispatch();
    let itemArray;

    const newArray = useSelector(state=>state.todoItemsArray)

    const [input, setInputData] = useState("");

    const handleChange = () =>{
        let data = document.getElementById("addTodoItem").value;
        setInputData(data);
    }   


    const addTodoListData = () =>{

    if(input!==""){    
        dispatch(addItemsInTodoList({input}));
        setInputData("");
    }
    else{
        alert("Please add valid input!!!");
    }


    }


    const renderArray = () =>{
        if(newArray.length >0){
              itemArray = newArray.map((item,index)=>{
              return  (
                        <div key={item} >
                            <p key={index}>{item.input}</p>
                            <button key={index} onClick={()=>dispatch(removeItemsInTodoList({item}))}>Remove the Item</button>
                            <hr key={index}/>
                        </div>
                    );    
              });

        }

    return <div>{itemArray}</div>
    
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