import React, { useState } from 'react'

const Problem2detailpage = ({fn}) => {
   
  return (
    <div className='px-10 border-green-600'>
        <div className='flex flex-wrap justify-between gap-14'>
           <div className=' h-80 w-[25%] flex flex-col justify-around items-center rounded-2xl hover:shadow-2xl hover:shadow-green-500'>
            <h2 className='text-2xl font-bold'>Iphone 16</h2>
            <img className='w-[250px] h-[140px]' src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4K05tOGV2bzRuYjBHQm9BRXF6V0NIa1pGQnBBWVp4a3ZSd0Y4NzlDUVE4dUNaSE1Qa0haZTFvMWVJTkxjaWwxSnkzOUg0UFpZQ3VpRm1pRzhkR1Ryeml2SU9MVE5pTzVJc0UzVjN3eVRHYUNn&traceId=1'/>
                <ul className='text-xs'>
<li><span className='font-bold'>Brand</span>	Apple</li>
<li><span className='font-bold'>Operating System</span>	iOS 17</li>
<li><span className='font-bold'>RAM Memory Installed Size	</span>R128 GB</li>
<li><span className='font-bold'>Memory Storage Capacity</span>	128 GB</li>
<li><span className='font-bold'>Screen Size</span>	6.1 Inches</li>
</ul>
                <button onClick={fn} className='border-2 border-gray-800 rounded-md px-2'>Add To Cart</button>
           </div>
           <div className=' h-80 w-[25%] flex flex-col justify-around items-center rounded-2xl hover:shadow-2xl hover:shadow-green-500'>
            <h2 className='text-2xl font-bold'>Samsung GALAXY S23fe</h2>
            <img className='w-[225px] h-[165px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2JpgmS7WxJHl9Fide79YqXM444DmeaGYgg&s'/>
                <ul className='text-xs'>
<li><span className='font-bold'>Brand</span>	SAMSUNG</li>
<li><span className='font-bold'>Operating System</span>	Android 10.0</li>
<li><span className='font-bold'>RAM Memory Installed Size	</span>8 GB</li>
<li><span className='font-bold'>CPU Model</span>	Snapdragon</li>
<li><span className='font-bold'>CPU Speed</span>	3.4 GHz</li>
</ul>
                <button onClick={fn} className='border-2 border-gray-800 rounded-md px-2'>Add To Cart</button>
           </div>
           <div className='h-80 w-[25%] flex flex-col justify-around items-center rounded-2xl hover:shadow-2xl hover:shadow-green-500'>
            <h2 className='text-2xl font-bold'>Samsung Galaxy S24 5G AI </h2>
            <img className='w-[200px] h-[150px]' src='https://jamesandco.in/wp-content/uploads/2024/07/81vxWpPpgNL._SL1500_.jpg'/>
                <ul className='text-xs'>
<li><span className='font-bold'>Brand</span>	Samsung</li>
<li><span className='font-bold'>Operating System</span>		Android 14</li>
<li><span className='font-bold'>RAM Memory Installed Size	</span>12 GB</li>
<li><span className='font-bold'>CPU Model</span>	Snapdragon</li>
<li><span className='font-bold'>Memory Storage Capacity</span>	512 GB</li>
</ul>
                <button onClick={fn} className='border-2 border-gray-800 rounded-md px-2'>Add To Cart</button>
           </div>
           <div className=' h-80 w-[25%] flex flex-col justify-around items-center rounded-2xl hover:shadow-2xl hover:shadow-green-500'>
            <h2 className='text-2xl font-bold'>OnePlus Open</h2>
            <img className='w-[200px] h-[140px]' src='https://m.media-amazon.com/images/I/71pKVhll1IL.jpg'/>
                <ul className='text-xs'>
<li><span className='font-bold'>Brand</span>	Oneplus</li>
<li><span className='font-bold'>Operating System</span>	Android 13.0</li>
<li><span className='font-bold'>RAM Memory Installed Size	</span>16 GB</li>
<li><span className='font-bold'>CPU Model</span>	Snapdragon</li>
<li><span className='font-bold'>Memory Storage Capacity</span>	512 GB</li>
</ul>
                <button onClick={fn} className='border-2 border-gray-800 rounded-md px-2'>Add To Cart</button>
           </div>
           <div className=' h-80 w-[25%] flex flex-col justify-around items-center rounded-2xl hover:shadow-2xl hover:shadow-green-500'>
            <h2 className='text-2xl font-bold'>Google Pixel 9</h2>
            <img className='w-[200px] h-[150px]' src='https://i.gadgets360cdn.com/products/large/Pixel-9-DB-709x800-1723555719.jpg'/>
                <ul className='text-xs'>
<li><span className='font-bold'>Brand</span>	Google</li>
<li><span className='font-bold'>Operating System</span>	Android 14</li>
<li><span className='font-bold'>RAM Memory Installed Size	</span>16 GB</li>
<li><span className='font-bold'>Memory Storage Capacity</span>	128 GB</li>
<li><span className='font-bold'>Screen Size</span>	6.3 Inches</li>
</ul>
                <button onClick={fn} className='border-2 border-gray-800 rounded-md px-2'>Add To Cart</button>
           </div>
           <div className=' h-80 w-[25%] flex flex-col justify-around items-center rounded-2xl hover:shadow-2xl hover:shadow-green-500'>
            <h2 className='text-2xl font-bold'>Iphone 16</h2>
            <img className='w-[250px] h-[140px]' src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4K05tOGV2bzRuYjBHQm9BRXF6V0NIa1pGQnBBWVp4a3ZSd0Y4NzlDUVE4dUNaSE1Qa0haZTFvMWVJTkxjaWwxSnkzOUg0UFpZQ3VpRm1pRzhkR1Ryeml2SU9MVE5pTzVJc0UzVjN3eVRHYUNn&traceId=1'/>
                <ul className='text-xs'>
<li><span className='font-bold'>Brand</span>	Apple</li>
<li><span className='font-bold'>Operating System</span>	iOS 17</li>
<li><span className='font-bold'>RAM Memory Installed Size	</span>R128 GB</li>
<li><span className='font-bold'>Memory Storage Capacity</span>	128 GB</li>
<li><span className='font-bold'>Screen Size</span>	6.1 Inches</li>
</ul>
                <button onClick={fn} className='border-2 border-gray-800 rounded-md px-2'>Add To Cart</button>
           </div>

        </div>
        
    </div>
  )
}

export default Problem2detailpage