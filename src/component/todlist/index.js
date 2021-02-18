import React from 'react'



const Todo=({todo,removeTodo,handleChange})=>{
    console.log(todo)
    const handleCheckboxChange=()=>{
        if(todo.done)
            return null
        handleChange(todo.id)
    }
    return(
     <div style={{alignItems:"left", textAlign:"left", alignContent:"left", marginLeft:"225px"}}>
<form style={{}}>
    <input style={{margin: "0",padding:"0",  height:"13px"}} type="checkbox" checked={todo.done} onChange={()=>handleCheckboxChange()}/>
         <span style={todo.done?{textDecoration:"line-through"}:null}>{todo.title}</span>
         <span style=
                   {{position:"fixed",
                       right:600 ,
                       padding:"10px",
                       cursor:"pointer",
                       fontWeight:900}}
         onClick={()=>{removeTodo(todo.id)}}

         >

             X</span>
         <hr/>
</form>
     </div>
    )



}

export default Todo