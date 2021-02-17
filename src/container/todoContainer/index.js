import React,{useState} from "react";
import Todo from "../../component/todlist";
import AddTodo from "../../component/addtodo";
const todoList=[
    {id:1,title:'learn React',done:true},
    {id:2,title:'feel awesome',done:false},

]




const TodoContainer=()=> {
    const[todos,setTodos]=useState(todoList)
    const handelAddTodo =(newTodo)=>{
        const newTodoList=[...todos,newTodo]
       setTodos(newTodoList)
    }
    return(
        <div>
            <h4 style={{alignItems:"center"}}> Todo Application</h4>
            <AddTodo addtodo={handelAddTodo}/>
            {todos.map((todo)=><Todo todo={todo}/>)}

        </div>


    )






}
export default TodoContainer;