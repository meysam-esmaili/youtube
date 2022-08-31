import React, { useEffect, useState } from 'react'
//api
import { fetchFromApi } from '../utils/fetchFromApi';
//components
import Video from './Video'

//mui
import {  Typography } from '@mui/material'
import { Box } from '@mui/system'

import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() =>
  {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data)=> setVideos(data.items));
  }, [searchTerm]);
 
    
return (
  <Box p={2} 
  sx={{ flex:2 , overflowY:'auto' , height:'90vh' }}> 

    <Typography variant='h4' mb={2}  sx={{ color:"#fff" , fontWeight:'bold' }}>
     Search Results for <span style={{ color:"#f31503" }}>{searchTerm}</span>  Videos
    </Typography> 
    
    <Video videos={videos}/>
  </Box>
  )
}

export default SearchFeed