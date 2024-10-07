import React, { useEffect } from 'react'

const Task1 = () => {
  useEffect(()=>{
    alert("Welcome to the Page")
  });
  return (
    <div className='text-blue-500 text-3xl'>This is the task one</div>
  )
}

export default Task1