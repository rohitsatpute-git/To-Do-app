
import React from "react";
import { useLocation } from "react-router-dom";
import './Home.css'
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function App() {
  const navigate=useNavigate();
  const location =useLocation();
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(()=>{
    console.log("rohit")
    axios.post('http://localhost:8000/message',{
        
        email:location.state.email,
        name:"#",
    })
    .then((response)=>{
      
      console.log(response.data);
        response.data.map((x)=>{
            const newTodo = {
                _id: x._id,
                task: x.task,
              };
            setList((list)=>[...list,newTodo]);
        })
    })
  },[]);

  

  const addTodo = (todo) => {

    setList([]);
    axios.post('http://localhost:8000/message',{
        email:location.state.email,
        name:todo,
     
    }).then((response)=>{
      response.data.map((x)=>{
        const newTodo = {
            _id: x._id,
            task: x.task,
          };
        setList((list)=>[...list,newTodo]);
    })
    })


    // add the todo to the list
    // setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const deleteTodo = (_id) => {
    // Filter out todo with the id
    console.log(_id)
    setList([]);
    axios.delete('http://localhost:8000/message',{
      data:{
        idno:_id,
        email:location.state.email
      }
    }).then((response)=>{
      // console.log(response.data);

      response.data.map((x)=>{
        const newTodo = {
            _id: x._id,
            task: x.task,
          };
        setList((list)=>[...list,newTodo]);
    })
    })

  };
  const handleclick=()=>{
    navigate("/");
   }
  return (
    <div>
      <h1>Welcome,{location.state.name}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ol>
        {list.map((todo) => (
          <li key={todo._id}>
            {todo.task}
            <button onClick={() => deleteTodo(todo._id)}>&times;</button>
          </li>
        ))}
      </ol>
      <button onClick={handleclick}>LogOut</button>
     
    </div>
  );
}

export default App;
