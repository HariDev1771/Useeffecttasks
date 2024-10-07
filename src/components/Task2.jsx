import React, { useEffect } from 'react'

const Task2 = () => {
    useEffect(()=>{
       let timer= setTimeout(()=>{
            alert("How are You?")
            console.log("first")
        },1000);
        return ()=>{
            clearTimeout(timer)
        }
    },[])
  return (
    <div className='flex items-center justify-center pt-80'>
        <p className='text-green-500 text-3xl font-bold'>UseEffect</p>
    </div>
  )
}

export default Task2