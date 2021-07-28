import React from 'react'
import TodoItem from "./TodoItem";

export default function Todos(props) {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }

    console.log(props);

    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3"> Show List</h3>
            {
            props.todos.length > 0 &&
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (
                <>
                 <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
                </>
                )

            })}
             {/* <TodoItem  todo= {props.todos[1]} /> */}
        </div>
    )
}
