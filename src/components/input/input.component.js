import React, { useState } from 'react';
import './input.style.css';

const Input = () =>{
    const [todoListData, setTodoListData] =  useState("");


    const addTodoListData = () =>{
        let data = document.getElementById("addTodoItem").value;
        console.log("button clicked!!!");

    }

    return (
        <div>
            <h1>Hello Akshay</h1>
            <input type="text" id="addTodoItem" />
            <button type="button" onClick={addTodoListData}>Add Item</button>
        </div>
    );


}

export default Input;