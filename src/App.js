import React, {Component} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import TodoContainer from "./container/todoContainer";
import  './App.css'
const todo1 = "Learn React"

function App(){
 return(
    <div className="App">
<div class="container">
      <TodoContainer/>
</div>
    </div>)



}

export default App;
