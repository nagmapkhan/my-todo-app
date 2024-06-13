import React from "react";
import { TodoItem } from "./TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style={myStyle}>
      <h3>Todos List</h3>
      {props.todos.length === 0 ? "No Todo to Display" :
        props.todos.map((todo) => {
          return (  
          <><TodoItem todo={todo} key={todo.srno} onDelete={props.onDelete} /> <hr /> 
          </>
          );
        })}
    </div>
  );
};

export default Todos;
