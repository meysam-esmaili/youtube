import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography ,Box , Stack } from '@mui/material';

import Video from './Video';
import { fetchFromApi } from '../utils/fetchFromApi';

const VideoDetails = () => {

  const{id}=useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetails(data.items[0]));

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  },[id]);

  if(!videoDetails?.snippet) return "loading....."

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;

  return (
    <Box minHeight="92vh">
      <Stack direction={{ xs:'column' , md:'row' }}>
        <Box flex={1}>
          <Box sx={{ width:'100%' , position:'sticky',top:'86px' }}>
            
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player"  controls/>
            
            <Typography color="#fff"  variant='h5'>
              {videoDetails.snippet.title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" sx={{ color:"FFF" }} py={1} px={2}>
              <Link to={`/chanel/${channelId}`}>
                <Typography variant='h6' color="#867777"> 
                  {channelTitle}
                </Typography>
              </Link>
              <Stack>
                <Typography variant='body1' color="#FFF" sx={{ opacity:'.8' }}> 
                {parseInt(viewCount).toLocaleString()} view
                </Typography>
                <Typography variant='body1' color="#bd1616" sx={{ opacity:'.8' }}> 
                {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>

          </Box>
           
        </Box>
       
      </Stack>
      <Typography variant='h4' color="#fff" sx={{ display:'flex' , justifyContent:'center',marginTop:"75px" }}>
        Related to this video
      </Typography>
      <Box mt={5} px={5} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
            <Video videos={videos} direction="column" />
          </Box>
      
    </Box>
  )
}

 export default VideoDetails