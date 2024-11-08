import React, { useState, useRef, useEffect } from 'react'
import File from './file'
import useDfs from './useDfs'

const Folder = ({folderData, explorerData, setExplorerData}) => {
   const [expand, setExpand] = useState(false);
   const [hover, setHover] = useState(false);
   const [currentFolderId, setCurrentFolderId] = useState(null);
   const [newItemName, setNewItemName] = useState("");
   const inputRef = useRef(null);
   const [isAddingFolder, setIsAddingFolder] = useState(false);
   const {createNewItem, deleteItem, renameItem} = useDfs();

   const addItem = (e, folderId, isFolder) => {
      
      e.stopPropagation();
      if(currentFolderId === folderId && isAddingFolder === isFolder){
        return;
      }
      setCurrentFolderId(folderId);
      if(!expand){
        setExpand(true);
      }
      setIsAddingFolder(isFolder);
   }

   const handleOnBlur = () => {
    setCurrentFolderId(null);
    setNewItemName("");
    setIsAddingFolder(false);
   }

   useEffect(() => {
    if(currentFolderId){
      inputRef.current?.focus();
    }
   }, [currentFolderId]);

   const handleSubmit = () => {

      const newExplorerData = createNewItem(explorerData, newItemName, currentFolderId, isAddingFolder);
      console.log(newExplorerData);
      setExplorerData(newExplorerData);

      setCurrentFolderId(null);
      setNewItemName("");
      setIsAddingFolder(false);
   }

   const deleteItemHandler = (e, id) => {
      console.log(id);
      e.stopPropagation();
      const newExplorerData = deleteItem(explorerData, id);
      console.log(newExplorerData);
      setExplorerData(newExplorerData);
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
              <span onClick={(e) => deleteItemHandler(e, folderData.id)}> 🗑️ </span>
            </div>
          }
        </div>
        {
          currentFolderId === folderData.id && <form className='pl-4 pb-2' onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
            {isAddingFolder ? "📂" : "📄"}
            <input type='text' ref={inputRef} className=' p-1 mt-1 text-white bg-gray-800 focus:outline-none' value={newItemName} onChange={(e) => setNewItemName(e.target.value)} onBlur={() => handleOnBlur()}/>
          </form>
        }

        {
            expand && <div className='pl-4 pb-2'>
            {
              folderData.items.map((item) => {
                  return item.isFolder ? <Folder folderData={item} explorerData={explorerData} setExplorerData={setExplorerData} key={item.id}/> : <File fileData={item} key={item.id}/>
              })
            }
          </div>
        }
    </>
  )
}

export default Folder