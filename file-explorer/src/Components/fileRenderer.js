import React, { useState } from 'react'
import explorer from './config'
import Folder from './folder'
import File from './file'

const FileRenderer = () => {
    const [explorerData, setExplorerData] = useState(explorer);  

  return (
    <div>
        <Folder folderData={explorerData} explorerData={explorerData} setExplorerData={setExplorerData}/>
    </div>
  )
}

export default FileRenderer