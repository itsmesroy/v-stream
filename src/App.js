import logo from './logo.svg';
import './App.css';
import MediaCard from './cards.jsx'
//import datas from './data.json'
// import { Card } from '@mui/material';
 import { useEffect, useState } from 'react';
 import Grid from '@mui/material/Grid2';
 //import Box from '@mui/material/Box';
 import style from './App.module.css'



 export default function App() {

const [videosData, setvideosData]=useState([]);

const fetchVideosData= async()=>{
  try{
    const res = await fetch("https://content-xflix-backend.azurewebsites.net/v1/videos ");
    const data= await res.json();
    setvideosData(data.videos);
  }catch(err){
    console.error(err);
    alert("Error fetching videos. Please try again later.")  
  }
};
useEffect(()=>{
  fetchVideosData();
},[]);

  return (
      
    <Grid container spacing={3} className={style.gridContainer}>
    {videosData.map((item, idx) => (
      <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} className={style.gridItem}>
        <MediaCard video={item} hasBtn={idx % 2 === 1} />
      </Grid>
    ))}
  </Grid>
     
        );
      }