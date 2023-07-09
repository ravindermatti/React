import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

const Todo = () => {
    const todo=useSelector(state=>state.todo);
    const[temptodo,setTemptodo] = useState()
    const dispatch =useDispatch();

  return (
    <div>
      <h2>Todo List using</h2>
      <input type="text"  onChange={(e)=>setTemptodo(e.target.value)} />

      <button onClick={()=>dispatch({type:'ADD',payload:temptodo})}>+</button>
      <h4>List of Tasks</h4>
      <br/>
      <ol>
      {todo.map((item,index)=>
        <li key={index}>
           {item}
           <button onClick={()=>dispatch({type:'REMOVE',index})}>×</button>
       </li>)}
      </ol>

    </div>
  )
}

export default Todo