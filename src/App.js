import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import ToDoItem from './toDo/ToDoItem/ToDoItem';
import todosData from './toDo/todosData';

const getLocalStorage = () => {
  let todoItems = localStorage.getItem("todoItems");
  if(todoItems){
    return (todoItems = JSON.parse(localStorage.getItem("todoItems")));
  } else {
    return (todosData);
  }
};

const App = () =>{
  const [todoItems, settodoItems] = useState(getLocalStorage());
  const [value, setValue] = useState('')

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const removeItem = id => {
    settodoItems(todoItems.filter(item => item.id !== id))
  } 

  const getValueInput = (event) => {
    setValue(event.target.value)
  }

  const addItem = (text) => {
    settodoItems(todoItems.concat([
      {
        text,
        id: Date.now(),
        completed: false
      }
    ]))
  }
  const hendleSabmit = (event) => {
    event.preventDefault()
    if (value.trim()) {
      addItem(value)
      setValue('')
    }
    
  }

  

  const handleChange = id => {
    const index = todoItems.map(item => item.id).indexOf(id);
    
    settodoItems(state => {
      let todoItems = [...state];
      todoItems[index].completed = true;
      return todoItems;
    })
  }
  
  const activeTasks = todoItems.filter(task => task.completed === false);
  const completedTasks = todoItems.filter(task => task.completed === true); 
  const finalTasks = [...activeTasks,...completedTasks].map(item => {
    return (
      <ToDoItem
        key={item.id}
        description={item.text}
        completed={item.completed}
        handleChange={()=> handleChange(item.id)}
        removeItem={()=>removeItem(item.id)}
      />
    )
  })

  return (
    <div className="App">
      <h1 className='todos__title'>Мои задачи</h1>
      <form onSubmit={hendleSabmit}>
          <input className="todos__input" value={value} type='text' onChange={getValueInput}/> 
          <button className='todos__add'>Добавить задание</button>
      </form>
      {todoItems.length ? finalTasks : <p className='todos__title'>У вас нет заданий на сегодня</p> }
      
    </div>
  );

}


export default App;

