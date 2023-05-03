import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from "@mui/material";

import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from 'utils/fetchFromAPI';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(); //lead us to the channel details
    const [videos, setVideos] = useState([]); //Contain our videos

    const { id } = useParams();

    useEffect(() => {
        const fetchResults = async () => {

            //Getting the channel
            const data = await fetchFromAPI(`channels?part=snippet&id=${id}`); //Get channel based on the id

            setChannelDetail(data?.items[0]); //Select the first channel to display

            //Getting the videon of that channel
            const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

            setVideos(videosData?.items); //Displaying all the videos
        };

        fetchResults();
    }, [id]);


    return (
        <Box minHeight='95vh'>
            {/*Channel details box*/}
            <Box>
                <div style={{
                    height: '300px', background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                    zIndex: 10,
                }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop="-93px" />

            </Box>

            {/*Videos Box */}
            <Box p={2} display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box >
    )
}

export default ChannelDetail