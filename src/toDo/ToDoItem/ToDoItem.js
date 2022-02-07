import React, {useState} from 'react';
import "./ToDoItem.css"


const ToDoItem = (props) => {
        
    return (
        <div className="todo-item" >
            <input type="checkbox" 
            onChange={props.handleChange } 
            defaultChecked={props.completed}></input>
            <p className="description">{props.description}</p>
           <button className="dotos__remuve" onClick={props.removeItem}>Удалить</button>
           
        </div>
    )
}


export default ToDoItem;
