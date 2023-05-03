import React from 'react';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const NavBar = () => {
    return (
        <Stack
            direction='row'
            sx={{
                // position: 'sticky',
                position: 'webkit-sticky',
                top: '0',
                backgroundColor: '#000',
                justifyContent: 'space-between'
            }}
            p={2}
            alignItems='center'
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt={logo} height={45} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default NavBar