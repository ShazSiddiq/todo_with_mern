import React, { useState } from 'react'
import Input from './Input'
import List from './List'

export default function App() {
  let [todos,setTodos]=useState(['breakfast','lunch','dinner'])
  let [editData,setEditData]=useState({
    index:"",
    value:""
  })
  const addTodo=(value)=>{
    setTodos([...todos,value])
  }
  const DeleteTodo=(value)=>{
    let filter=todos.filter((t,i)=>t!==value)
    setTodos(filter)
  }
  const EditTodo=(index,value)=>{
    setEditData({
      index,
      value
    })
  }
  const updateTodo=(index,value)=>{
    todos.splice(index,1,value)

    setTodos([...todos])

    setEditData({
      index:"",
      value:""
    })
  }
  return (
    <div className='container'>
      <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo} />
      <List todos={todos} DeleteTodo={DeleteTodo} EditTodo={EditTodo}/>
    </div>
  )
}
