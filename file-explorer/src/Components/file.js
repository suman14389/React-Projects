import React from 'react'

const File = ({fileData}) => {
  return (
    <>
        <p className='pb-2 cursor-pointer hover:bg-gray-800'> 📄 {fileData.name}</p>
    </>
  )
}

export default File