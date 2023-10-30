import React, {useState,useReducer} from 'react';
import Todo from './Todo'
import './App.css';

export const ACTIONS = {
  ADD_TODO:'addTodo',
  TOGGLE_TODO:'toggleTodo',
  DELETE_TODO:'deleteTodo',
}

function reducer(todoList,action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todoList, newTodo(action.payload.item)]
    case ACTIONS.TOGGLE_TODO :
      return todoList.map(item =>{
        if(item.id === action.payload.id){
          return {...item, complete:!item.complete}
        }
        return item;
      })
     case ACTIONS.DELETE_TODO:
        return todoList.filter(item => item.id !== action.payload.id)
    default:
      return todoList  
  }
}
function newTodo(todoItem){
  return{id:Date.now(),item:todoItem,complete:false}
}

function App(){

  const [todoList,dispatch] = useReducer(reducer,[]);
  const [todoItem,setTodoItem] = useState('');

  function HandleSubmit(event){
    event.preventDefault();
    dispatch({type:ACTIONS.ADD_TODO,payload:{item:todoItem}})
    setTodoItem("")
  }
console.log(todoList)

  return (
    <div className="App">
     <form onSubmit={HandleSubmit}>
      <input type='text' value={todoItem} onChange={e=>setTodoItem(e.target.value)}></input>
     </form>
     {todoList.map(todo =>{
     return <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>
     })}
    </div>
  );

}



export default App;
