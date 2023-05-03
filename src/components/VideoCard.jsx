import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // console.log(videoId)

  return (
    <Card sx={{ width: { sx: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>

      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
          sx={{ height: 180, width: { sx: '100%', sm: '358px', md: '320px' } }}
        />
      </Link>

      <CardContent sx={{ background: "#1E1E1E", height: '106px' }}>
        <Link to={videoId ? `/video/{$videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' color="#fff">
            {/*Setting the title from 0 way up to 60 characters*/}
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: '12px', ml: '5px' }} />
          </Typography>
        </Link>

      </CardContent>

    </Card>
  )
}

export default VideoCard