import logo from './logo.svg';
import './App.css';
import MediaCard from './cards.jsx'
//import datas from './data.json'
// import { Card } from '@mui/material';
 import { useEffect, useState } from 'react';
 import Grid from '@mui/material/Grid2';
 import Box from '@mui/material/Box';

function App() {

const [videosData, setvideosData]=useState([]);

const fetchVideosData= async()=>{
  try{
    const res = await fetch("https://content-xflix-backend.azurewebsites.net/v1/videos ")
    const data= await res.json();
    setvideosData(data.videos);
  }catch(err){
    console.error(err);
    alert("Error fetching videos. Please try again later.")  // Add a more robust error handling mechanism here.
  }
};
useEffect(()=>{
  fetchVideosData();
},[]);

  return (
      
          <Grid container > 
          {videosData.map((video, Item) =>{         
            <Grid key={video.id} size={{xs:12,   md:6, lg:3}} >
            <MediaCard videos={video} />
          </Grid>   
          })}       
        </Grid>
     
        )
      }

export default App;
