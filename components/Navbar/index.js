"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { data } from './static-data'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false)
    const isMobile = useMediaQuery('(max-width:600px)');
    const handleClose = () => { }

    const handleSearch = () => {
        console.log('search was clicked')
    }

    const handleCart = () => {
        console.log('cart was clicked')
    }

    const handleMobile = () => {
        setIsVisible(true)
    }

    const handleWishList = () => {
        console.log('wishList was clicked')
    }

    const handleIconClick = (index) => {
        // order of items is important
        const actions = [
            handleSearch,
            handleCart,
            handleWishList,
            handleMobile,
        ];
    
        const action = actions[index];
    
        if (action) {
            action();
        }
    };

    return (
        <Container maxWidth="xl">
            <Box className="flex justify-between py-2">
                <Box className="flex items-center gap-10 p-2">
                    <Image src={data.logo} alt="Bandage" width={120} height={120} className="mr-10" />
                    <Box className="hidden md:flex items-center">
                        {data.menuItems.map((item, index) => (
                            <MenuItem key={index} onClick={handleClose}>
                                <Typography className="text-grey font-Montserrat font-bold leading-6 tracking-wide" variant="body2">
                                    {item}
                                    {item === 'Shop' ? <ExpandMoreIcon /> : ''}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Box>
                </Box>
                <Box className="flex gap-2 items-center p-2">
                    <MenuItem variant="body2" className='hidden md:flex secondary' onClick={handleClose}>
                        <PersonOutlineIcon fontSize="small" color="secondary" />
                        <Typography className='font-bold tracking-wider' color='secondary' variant="body2">
                            {data.loginRegisterMenuItem}
                        </Typography>
                    </MenuItem>
                    {data.icons.map((icon, index) => (
                        (index !== 2 || !isMobile) && (
                            (index !== 3 || isMobile) && (
                                <span
                                    key={index}
                                    className={isMobile ? "text-black cursor-pointer" : "text-secondary cursor-pointer"}
                                    onClick={() => handleIconClick(index)}
                                >
                                    {icon}
                                </span>
                            )
                        )
                    ))}
                </Box>
            </Box>
            {isVisible ? <MobileNavbar data={data} /> : ''}
        </Container>

    )
}

export default Navbar
