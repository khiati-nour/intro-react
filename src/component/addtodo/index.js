import React,{useState, useRef, useEffect} from "react";




const  AddTodo=({addtodo})=>{
const addTodoStyle={
  display:"block",
alignItems:"center",


}
const[title,setTitle]=useState("")
const HandleSubmit=(e)=>{
    e.preventDefault()
const newTodo= {id:Math.random(),title:title,done:false}
addtodo(newTodo)

    setTitle("");

    }
    return(<div style={addTodoStyle}>

        <form style={{paddingTop:"50px", marginBottom:"50px",display:"block", alignContent:"center", textAlign:"center", alignItems:"centre"}} onSubmit={HandleSubmit}>
            <input style={{borderRadius:"10px", borderColor:"hotpink", width:"300px"}} type="text" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="Enter a To Do" required/>
            <input style={{marginLeft:"500px",display:"block", alignContent:"center", textAlign:"center", alignItems:"centre",marginTop:"20px", borderRadius:"10px", padding:"5px",fontWeight:600,backgroundColor:'hotpink'}} type="submit"/>



        </form>
    </div>)


}

export default AddTodo;