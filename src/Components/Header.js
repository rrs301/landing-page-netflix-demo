import React from 'react'
import { logo } from '../Assets'
import  './Header.css'
function Header() {
  return (
    <div className=''>
        <div className='flex flex-row items-center'>
            <img src={logo} className='h-[50px]' />
            <ul className='flex flex-row '>
                <li className='hover:scale-110 cursor-pointer transition-all 
                hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-white hover:text-white'>Home</li>
                <li className='hover:scale-110 cursor-pointer transition-all 
                hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-white hover:text-white'>News</li>
                <li className='hover:scale-110 cursor-pointer transition-all 
                hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-white hover:text-white'>Articals</li>
               
            </ul>
        </div>
    </div>
  )
}

export default Header