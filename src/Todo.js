import React from 'react';
import {ACTIONS} from './App.js'


function Todo({todo,dispatch}){

function HandleUpdate(){
    dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:todo.id}})
}
function HandleDelete(){
    dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})
}



    return (
    <div>
    <span style={{color: todo.complete ? 'salmon' : 'grey'}}>{todo.item}</span>
    <button onClick={HandleUpdate}>Complete</button>
    <button onClick={HandleDelete}>Delete</button>
    </div>
    )
}

export default Todo;