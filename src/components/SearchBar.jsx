import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from "@mui/icons-material"

const SearchBar = () => {
    //This is where we are making the search functionality work😍
    //Step 1 create a state 
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    };

    return (
        <Paper
            component='form'
            sx={{
                borderRadius: 20,
                pl: 2,
                border: '1px solid  #e3e3e3',
                boxShadow: 'none'
            }}
            onSubmit={handleSubmit}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                sx={{ border: 'none' }}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit'
                sx={{ p: '10px', color: 'red' }}
                arial-label="search">
                <Search />
            </IconButton>

        </Paper>
    )
}

export default SearchBar