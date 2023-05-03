import React from 'react'
import { categories } from '../utils/constants'
import { Stack } from '@mui/system'


const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <Stack sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}
            direction='row' >

            {categories.map((category) => <button
                className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && "#FC1503",
                    color: 'white',
                }}
                key={category.name}
            >
                <span
                    sx={{ color: category.name === selectedCategory ? '#FFF' : '#FF0000' }}
                >{category.icon}</span>

                <span
                    style={{
                        opacity: category.name === selectedCategory ? '1' : "0.8",
                        marginLeft: '15px'
                    }}
                >{category.name}</span>

            </button>)
            }

        </Stack >
    )
}

export default Sidebar