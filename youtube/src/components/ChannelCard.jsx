import React from 'react'
import { Typography,  CardContent, CardMedia,Box } from "@mui/material";
import {Link} from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box
    sx=
    {{  boxShadow:'none',
     borderRadius:'20px',
     display:"flex",
     margin:'auto' ,
     justifyContent:"center",
     alignItems:'center',
     height:'320px' ,
     marginTop: marginTop,
     width:{xs:'306px',ms:'320px'} }}>
      
    <Link to={`/chanel/${channelDetail?.id?.ChannelId}`}>
      <CardContent sx={{ display:"flex" , flexDirection:'column', justifyContent:'center', alignItems:'center',color:'#fff'}}>
        <CardMedia 
        image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetail?.snippet?.title}
        sx={{ borderRadius:'50%',width:'180px',height:'180px',mr:3 }}
        />
        <Typography variant='h6' sx={{ mr:3,mt:1 }}>
          {channelDetail?.snippet?.title}
        </Typography>
      </CardContent>
    </Link>


    </Box>
  )
}

export default ChannelCard