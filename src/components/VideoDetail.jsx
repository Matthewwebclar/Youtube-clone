import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player' //This is the dependency we're using to showCase our video
import { Typography, Stack, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
//Local imports
import Videos from './Videos'
import { fetchFromAPI } from 'utils/fetchFromAPI'

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    // console.log(videoDetail)

    //fetch the data as soon as the app loads
    useEffect(() => {

        /* Fetching the data from the API and setting the state of the videoDetail to the data.items[0] */
        //Gettign the video from the api and selecting the firstr one    
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))


        //Get realted videos
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))
    }, [id]);

    if (!videoDetail?.snippet) return 'Loading...';

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <Box minHeight='95vh'>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', top: '86px', position: 'sticky' }}>
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className='react-player' controls />
                        <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
                            {title}
                        </Typography>

                        <Stack direction='row' justifyContent='space-between' py={2} px={2}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>{channelTitle}</Typography>
                                <CheckCircle sx={{ fontSize: '12px', ml: '5px', color: 'gray', textAlign: 'center' }} />
                            </Link>

                            <Stack direction='row' alignItems='center' gap='20px'>
                                <Typography sx={{ opacity: '0.7' }} color="#fff" variant='body1' >{parseInt(viewCount).toLocaleString()} views</Typography>
                                <Typography color="#fff" sx={{ opacity: 0.7 }} >{parseInt(likeCount).toLocaleString()} likes</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5, }} justifyContent='center' alignItems='center'>
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail