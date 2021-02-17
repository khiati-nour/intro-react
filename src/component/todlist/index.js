import React from 'react'



const Todo=({todo,removeTodo,handleChange})=>{
    console.log(todo)
    const handleCheckboxChange=()=>{
        if(todo.done)
            return null
        handleChange(todo.id)
    }
    return(
     <div>

         <input  type="checkbox" checked={todo.done} onChange={()=>handleCheckboxChange()}/>
         <span style={todo.done?{textDecoration:"line-through"}:null}>{todo.title}</span>
         <span style=
                   {{position:"fixed",
                       right:20 ,
                       padding:"10px",
                       cursor:"pointer",
                       fontWeight:600}}
         onClick={()=>{removeTodo(todo.id)}}

         >

             X</span>
         <hr/>

     </div>
    )



}

export default Todo