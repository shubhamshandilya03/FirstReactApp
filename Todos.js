import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";
export const Todos = (props) => {
    let mystyle={
        minheight:"70vh",
        margin:"10px auto"
    }
    return (
        <div className="Container" style={mystyle}>
           <h2 className="my-3">Todos-List</h2>
           {props.todos.length===0?"No Todos To Display...":
           props.todos.map((todo)=>{
               return ( 
               <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
               ) 
           })
             }
        </div>
    )
}
