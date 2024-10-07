import React, { useEffect, useState } from 'react'

const Task3 = () => {
    const [like,setLike]=useState(false);
    useEffect(()=>{
        if(like){
            alert("Liked")
        }
        else{
            alert("Disliked")
        }
        
    },[like])
    const liked=()=>{
        if(like){
            setLike(false)
            
        }else{
            setLike(true)
            
        }
        
    }
    
  return (
    <div className="pt-64 flex justify-center items-center">
        <button onClick={liked} className='border-2 border-red-500'> .Like. </button>
    </div>
  )
}

export default Task3