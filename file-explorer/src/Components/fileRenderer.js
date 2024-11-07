import React, { useState } from 'react'
import explorerConfig from './config'
import Folder from './folder'
import File from './file'

const FileRenderer = () => {
    const [explorerData, setExplorerData] = useState(explorerConfig);  

  return (
    <div>
        {
            explorerData.map((item) => {
                return item.isFolder ? <Folder folderData={item}/> : <File fileData={item}/>
            })
        }
    </div>
  )
}

export default FileRenderer