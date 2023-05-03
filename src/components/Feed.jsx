import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from 'utils/fetchFromAPI'

const Feed = () => {
    /* Setting the state of selectedCategory to 'New' and setSelectedCategory is a function that sets
    the state of selectedCategory. */
    const [selectedCategory, setSelectedCategory] = useState("Latest");
    const [videos, setVideos] = useState([]);



    //Immediately feed the data as soon as the page loads
    //useEffect() - is a life-cycle hook which is call when a page initially loads
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`) //fetch data/video for that specific category
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);


    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
                    Copyright@ 2023 webclar
                </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2, }}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
                    {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>

        </Stack >

    )
}

export default Feed