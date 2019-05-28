import React, { useEffect } from 'react'
import FolderStructure from './FolderStructure'


const App = () => {
    let data = [];
    useEffect(()=>{
       fetch('/data')
           .then(response => response.json())
           .then(response => console.log(response));
    },[]);
    return(
        <FolderStructure contents={data}/>
    )
};

export default App;
