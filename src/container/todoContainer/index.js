import React,{useState, useRef, useEffect, useReducer} from "react";
import Todo from "../../component/todlist";
import AddTodo from "../../component/addtodo";
const LSKEY = "cc";


const todoList=[
    {id:1,title:'learn React',done:true},
    {id:2,title:'feel awesome',done:false},

]


const TodoContainer=()=> {
    const[todos,setTodos]=useState(()=>{
        const localData = window.localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : todoList
    })
    const HandelAddTodo =(newTodo)=>{
      const newTodoList=[...todos,newTodo]


        setTodos(newTodoList)

    }

    useEffect(() => {
        window.localStorage.setItem( "todos", JSON.stringify(todos))},[todos]

    );

    const handleRemoveTodo =(id)=>{
      const newTodoList=todos.filter(todo=>todo.id!==id)
        setTodos(newTodoList)
    }
    const handleCheckboxChange =(id)=>{
        const newTodoList=todos.map(todo=>{
            if(todo.id ===id)

                return {...todo,done:!todo.done}
            return todo;

        })
        setTodos(newTodoList)
    }
    return(
        <div>
            <h4 style={{align:"center"}}> Todo Application</h4>
            <AddTodo addtodo={HandelAddTodo}/>
            {todos.length>0?todos.map((todo)=><Todo todo={todo} removeTodo={handleRemoveTodo}
                                                    handleChange ={handleCheckboxChange}/>):"no todo left"}

        </div>


    )






}
export default TodoContainer;