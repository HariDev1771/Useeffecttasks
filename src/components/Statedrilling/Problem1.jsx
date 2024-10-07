import React from 'react'
import Problem1button from './Problem1button'

const Problem1 = () => {
    const stepper=()=>{
        console.log("Hello How are you")
    }
  return (
    <div className='pt-72'>
        <Problem1button clickfnn={stepper}/>
    </div>
  )
}

export default Problem1