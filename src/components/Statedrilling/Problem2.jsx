import React, { useState } from 'react'
import Problem2navbar from './Problem2navbar'
import Problem2detailpage from './Problem2detailpage'

const Problem2 = () => {
    const[item,setItem]=useState(0);
    const counterw=()=>{
        setItem(item+1);
    }
  return (
    <div className='flex flex-col gap-10'>
        <Problem2navbar cnt={item}/>
        <Problem2detailpage fn={counterw}/>
    </div>
  )
}

export default Problem2