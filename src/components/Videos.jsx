import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({ videos, direction }) => {

    if (!videos?.length) return 'Loading...'

    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' alignItems='start' gap={2} justifyContent='start'>
            {videos.map((video, index) => {
                return <Box key={index}>
                    {video.id.videoId && <VideoCard video={video} />}
                    {video.id.channelId && <ChannelCard channelDetail={video} />}
                </Box>
            })}

        </Stack>
    )
}

export default Videos