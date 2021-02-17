import React,{useState} from "react";




const  AddTodo=({addtodo})=>{
const addTodoStyle={
  display:"block",
alignItems:"center"
}
const[title,setTitle]=useState("")
const handleSubmit=(e)=>{
    e.preventDefault()
const newTodo= {id:Math.random(),title:title,done:false}
addtodo(newTodo)

    setTitle("");

    }
    return(<div style={addTodoStyle}>

        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="Enter a To Do" required/>
            <input type="submit"/>



        </form>
    </div>)


}

export default AddTodo;