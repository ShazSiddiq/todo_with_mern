import React, { useEffect, useState } from 'react'

export default function Input(props) {
  let [todo, setTodo] = useState('   ')
  let [error, setError] = useState(false)

  let inputChange = (event) => {
    setTodo(event.target.value)
    if (event.target.value.length > 0) {
      setError(false)
    } else {
      setError(true)
    }

  }

  let submit = (event) => {
    event.preventDefault()
    if (todo.length > 0) {
      if(props.editData.index!==''){
        props.updateTodo(props.editData.index,todo)
      }else{
        props.addTodo(todo)
      }
      
      
    } else {
      setError(true)
    }

    setTodo(' ')
  }

  useEffect(() => {
    setTodo(props.editData.value)
  }, [props.editData.value])
  return (
    <form className="row my-2" onSubmit={submit}>
      <div className="col-10">
        <input type="text" className="form-control" placeholder='Enter todo' value={todo} onChange=
          {inputChange} />
        {
          error && <p className='text-danger'>Please Enter Todo</p>
        }

      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary mb-3">
          {
            props.editData.index !== '' ? "Update" : "Add"
          }
        </button>
      </div>
    </form>
  )
}
