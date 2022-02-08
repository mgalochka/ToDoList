import React, {useState} from 'react';
import RemuvePng from '../../assets/img/remuve.png';
import "./ToDoItem.css"


const ToDoItem = (props) => {
        
    return (
        <div className="todo__item" >
            <input className='todo__checkbox' type="checkbox" 
            onChange={props.handleChange } 
            defaultChecked={props.completed}></input>
            <p className="todo__description">{props.description}</p>
           <a className="dotos__remuve" onClick={props.removeItem}>
             <img className='todos__img' src={RemuvePng} alt={RemuvePng} />   
           </a>
           
        </div>
    )
}


export default ToDoItem;
