import React from 'react'



const Todo=({todo})=>{
    console.log(todo)
    return(
     <div>

         <input  type="checkbox" checked={todo.done}/>
         <span>{todo.title}</span>
         <span style={{position:"fixed", right:20 , padding:"10px" , cursor:"pointer", fontWeight:600}}>X</span>
         <hr/>

     </div>
    )



}

export default Todo