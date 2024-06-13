import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, { useState } from "react";
import Addtodo from "./MyComponents/Addtodo";

function App() {

  const onDelete = (todo) => {
    console.log("i am on delete.",todo);
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }))

  };
  
  const addTodo=(title,dscr)=>{
    console.log("i am adding this todo",title,dscr)
    let srno ;
    if(todos.length==0){
      srno=0;
    }
    else{
     srno = todos[todos.length-1].srno +1
    }
   
    const myTodo={
      srno:srno,
      title:title,
      dscr:dscr
    }
    console.log(myTodo);
    setTodos([...todos,myTodo]);

  }

 
  const [todos, setTodos] = useState([
    { srno: 1, title: "Study", dscr: "have to do it" },
    { srno: 2, title: "go shopping", dscr: "have to do it" },
    { srno: 3, title: "dinner", dscr: "have to do it" },
  ]);
  return (
    <>
      <Header title="Todos List" SearchBar={false} />
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
