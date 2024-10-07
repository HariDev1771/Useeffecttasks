import React from 'react'

const Problem2navbar = ({cnt}) => {
  return (
    <div className='flex justify-between items-center px-9 rounded-md h-16 bg-slate-50 shadow-lg '>
    <p className='text-3xl text-blue-300 font-bold font-sans '>Mobiles Store</p>
    <div className='flex flex-col'>
        <p className='text-sm font-semibold text-gray-800'>Delivering to</p>
        <p className='text-sm text-blue-700'> Kochi 682022</p>
    </div>
    <div>
        <img className='w-[30px] h-[30px]' src="https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg"/>
        <p>{cnt}</p>
        
        </div>
    
    </div>
  )
}

export default Problem2navbar