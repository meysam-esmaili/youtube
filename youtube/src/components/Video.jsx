import { Box, Stack } from '@mui/system';
import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Video = ({ videos }) => {
  
  if(!videos)
  {
    return "loading";
  }

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
    {videos.map((item, idx) => (
      <Box key={idx}>
        {item.id.videoId && <VideoCard video={item} /> }
        {item.id.channelId && <ChannelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>
  )
}

export default Video