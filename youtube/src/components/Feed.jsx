import React, { useEffect, useState } from 'react'
//api
import { fetchFromApi } from '../utils/fetchFromApi';
//components
import Video from './Video'
import SideBar from './SideBar'
//mui
import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Feed = () => {

  const [selectCategory,setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() =>
  {
    fetchFromApi(`search?part=snippet&q= ${selectCategory}`)
      .then((data)=> setVideos(data.items));
  }, [selectCategory]);
 
    
return (
    <Stack 
    sx={{ 
      flexDirection:{ sx:"column", md:"row"} 
    }}
    >
      <Box
      sx=
      {{ 
        height:{sx:'auto', md:'92vh'},
        borderRight:'1px solid #3d3d3d',
        px: { sx:0 , md:2}
       }}
      >
      <SideBar
      selectCategory={selectCategory}
      setSelectCategory={setSelectCategory}
      />  
       <Typography className="copyright" variant='body2' 
       sx=
       {{ 
          color:'#fff',
          mt:1.5
        }}
       >
          Copy right 2022 Ekvan
       </Typography>
      </Box>

      <Box p={2} 
      sx={{ flex:2 , overflowY:'auto' , height:'90vh' }}> 

        <Typography variant='h4' mb={2}  sx={{ color:"#fff" , fontWeight:'bold' }}>
        {selectCategory} <span style={{ color:"#f31503" }}>Video</span>  
        </Typography> 
        
        <Video videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed