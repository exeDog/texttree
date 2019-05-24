import React, { useEffect } from 'react'
import FolderStructure from './FolderStructure'
import websocketDriver from '../../backend/bin/webDriver';


const App = () => {
    let data = [];
    useEffect(()=>{
        console.log(websocketDriver._get());
        data = websocketDriver;
    },[]);
    return(
        <FolderStructure contents={data}/>
    )
};

export default App;
