import React,{useState} from 'react'
import Todos from './Todos'
import style from "./home.module.css";
import NewTodo from './NewTodo';
import {v4 as uuidv4} from "uuid";
const Home = () => {
    const [todos,setTodos] = useState([]);
    const handleAddTodo = (todo) => {
        setTodos((prevTodos) =>{
            return [...prevTodos,{id:uuidv4(),todo}];
        })
       //or like this way too setTodos([...todos,{id:uuidv4(),todo}]); 
       /* here we are actually inserting
                 {
                    id: something,
                    todo : {
                        title: ,
                        desc: 
                    }
                 }
       */
    }
    const handleRemoveTodo = (id) => {
        setTodos((prevTodos) => {
            const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
            return filteredTodos;
        })
    }
  return (
    <div className={style.container}>
        <h1 style={{color:"whitesmoke"}}>TO-DO-LIST</h1>
        <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos = {todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home
