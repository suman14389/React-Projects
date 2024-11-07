import React from 'react'
import FileRenderer from './fileRenderer'

const SideBar = () => {
   
  return (
    <div className='bg-black h-screen w-1/4 text-white'>
        <div className='text-2xl font-bold p-4 border-b border-gray-800'>
            <p>File Explorer</p>
        </div>
        <FileRenderer/>
    </div>
  )
}

export default SideBar