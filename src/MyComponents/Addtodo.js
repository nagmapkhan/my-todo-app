
import React, { useState } from "react";

const Addtodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [dscr, setDscr] = useState("");

    const submit =(e)=>{
        e.preventDefault();
        if(!title||!dscr){
            alert("Title or Description cannot be blank" );
        }
        addTodo(title,dscr);
    }
    return (
        <div className='container'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />

                </div>
                <div className="mb-3">
                    <label htmlFor="dscr" className="form-label">Todo Description</label>
                    <input type="text" value={dscr} onChange={(e)=>{setDscr(e.target.value)}} className="form-control" id="dscr" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default Addtodo
