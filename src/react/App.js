import React from 'react'
import data from '../dataDump'
import FolderStructure from './FolderStructure'

const App = () => {
    return(
        <FolderStructure contents={data}/>
    )
};

export default App;
