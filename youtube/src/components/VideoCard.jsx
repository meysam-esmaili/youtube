import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoChannelUrl,demoChannelTitle,demoVideoTitle,demoThumbnailUrl,demoVideoUrl} from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
   
    
     <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
            sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
        />
        </Link>
        <CardContent sx={{ backgroundColor:"#1e1e1e",  height:'106px' }}>

            <Link to={videoId ? `/video/${videoId}`:`/video/cV2gBU6hKfY`}>
                <Typography variant='subtitle1' fontWeight="bold"  sx={{ color:"#fff" }}>
                    {snippet?.title.slice(0,50) || demoVideoTitle.slice(0,50)}
                </Typography>
            </Link>

            <Link to={snippet ?.channelId ? `/chanel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2'   sx={{ color:"gray" }}>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircleIcon sx={{ width:"12px" , ml:"5px" , color:"gray"}}/>
                </Typography>
            </Link>
        </CardContent>
     </Card>
  )
}

export default VideoCard