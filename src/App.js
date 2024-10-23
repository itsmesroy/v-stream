import logo from './logo.svg';
import './App.css';
import MediaCard from './cards.jsx'
import datas from './data.json'
// import { Card } from '@mui/material';
 import { useState } from 'react';

function App() {
console.log(datas);
const [videosData, setvideosData]=useState(datas.videos);

  return <div className="App"> {videosData.map((video) =>{
      return (
        
        <MediaCard />
        
      );      
    })}</div>;
     
}

export default App;
