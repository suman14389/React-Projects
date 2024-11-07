import React, { useState, useRef, useEffect } from 'react'
import File from './file'

const Folder = ({folderData}) => {
   const [expand, setExpand] = useState(false);
   const [hover, setHover] = useState(false);
   const [currentFolderId, setCurrentFolderId] = useState(null);
   const [newFolderName, setNewFolderName] = useState("");
   const inputRef = useRef(null);

   const addItem = (e, folderId, isFolder) => {
      e.stopPropagation();
      setCurrentFolderId(folderId);
      if(!expand){
        setExpand(true);
      }
   }

   const handleOnBlur = () => {
    setCurrentFolderId(null);
    setNewFolderName("");
   }

   useEffect(() => {
    if(currentFolderId){
      inputRef.current?.focus();
    }
   }, [currentFolderId]);

   const handleSubmit = () => {
      setCurrentFolderId(null);
      setNewFolderName("");
   }

  return (
    <>
        <div className='pb-2 hover:bg-gray-800 cursor-pointer flex justify-between' onClick={() => setExpand(!expand)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> 
          <div>
            <span> {expand ? " ⬇️ " : " ➡️ "} </span>
            <span>  {folderData.name}</span>
          </div>
          {
            hover && <div className='flex gap-2 mr-4'>
              <span onClick={(e) => addItem(e, folderData.id, true)}> + 📂 </span>
              <span onClick={(e) => addItem(e, folderData.id, false)}> + 📄 </span> 
            </div>
          }
        </div>
        {
          currentFolderId === folderData.id && <form className='pl-4 pb-2' onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
            <input type='text' ref={inputRef} className=' p-1 mt-1 text-white bg-gray-800 focus:outline-none' value={newFolderName} onChange={(e) => setNewFolderName(e.target.value)} onBlur={() => handleOnBlur()}/>
          </form>
        }

        {
            expand && <div className='pl-4 pb-2'>
            {
              folderData.items.map((item) => {
                  return item.isFolder ? <Folder folderData={item}/> : <File fileData={item}/>
              })
            }
          </div>
        }
    </>
  )
}

export default Folder