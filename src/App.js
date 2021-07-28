
//import logo from './logo.svg';
import './App.css';
import Todos from "./Todos";
import AddTodo from "./AddTodo";
//import TodoItem from "./TodoItem";
import image from './image/pic1.jpg';
import React, { useState, useEffect } from 'react';

import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete fo todo", todo);
    //deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo; //call set todo
    }))
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    console.log("I am adding this list", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  
  const [todos, setTodos] = useState([
    
  ])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
              <div className="image">
              <img src={image} className="image"></img>
              </div>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
