import React from 'react'

export default function List(props) {
  // console.log(props)
  return (
    <ul className="list-group ">
      {
        props.todos.length > 0 ? props.todos.map((value, index) => {
          return <li className="list-group-item d-flex justify-content-between " key={index}>
            <div>{value}</div>
            <div><button className='btn btn-warning mx-2' onClick={() => {props.EditTodo(index,value) }}>Edit</button>
              <button className='btn btn-danger my-2' onClick={() => props.DeleteTodo(value)}>Delete</button>

            </div>
          </li>
        }) : <li className="list-group-item">no todo</li>
      }
    </ul>
  )
}
