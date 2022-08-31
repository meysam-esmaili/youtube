import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import Video from './Video';
import ChannelCard from './ChannelCard';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChanelDetails = () => {
  const {id}=useParams();
  const[channelDetails,setChannelDetails]=useState(null);
  const[videos,setVideos]=useState([])
  useEffect(()=>{
    
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetails(data?.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`)
   .then((data)=>setVideos(data?.items));
  },[id]);
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{ 
            zIndex:10,
            height: '300px' ,
          background:' linear-gradient(90deg, rgba(246,200,240,1) 0%, rgba(226,109,233,1) 44%, rgba(0,212,255,1) 100%)'
          }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop="-110px"/>
      </Box>
      <Box display="flex" p={2}>
          <Box sx={{ mr:{sm:"50px"} }} />
            <Video videos={videos} />
          
      </Box>
    </Box>
  )
}

export default ChanelDetails