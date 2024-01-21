"use client"

import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Typography, Box, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { data } from './static-data'
import MobileNavbar from './MobileNavbar';
import { openCartModal } from '../../redux/action/cart.action'
import { openWishModal } from '../../redux/action/wish.action'
import { useDispatch } from 'react-redux';

const Navbar = () => {
    const pathname = usePathname()
    const isProductPage = pathname.split('/')[1];
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false)
    const isMobile = useMediaQuery('(max-width:600px)');
    const handleClose = () => { }

    const handleSearch = () => {
    }

    const handleCart = () => {
        dispatch(openCartModal());
    }

    const handleMobile = () => {
        setIsVisible(true)
    }

    const handleWishList = () => {
        dispatch(openWishModal());
    }

    const handleIconClick = (index) => {
        console.log('index');
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
    const count = '1'
    return (
        <Container maxWidth="xl" className={isProductPage ? 'md:px-48' : ''}>
            <Box className="flex justify-between py-2 mt-2">
                <Box className="flex items-center gap-28 p-2">
                    <Link href="/">
                        <Image src={data.logo} alt="Bandage" width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '120px', height: 'auto' }} />
                    </Link>
                    <Box className="hidden md:flex items-center gap-2">
                        {data.menuItems.map((item, index) => (
                            <MenuItem key={index} onClick={handleClose} className='px-1' >
                                <Link href={`/${item.url}`}>
                                    <Typography className="text-grey font-montserrat font-semibold leading-6 tracking-wide" variant="body2">
                                        {item.name}
                                        {item.name === 'Shop' ? <ExpandMoreIcon /> : ''}
                                    </Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Box>
                </Box>
                <Box className="flex gap-4 items-center p-2">
                    <MenuItem variant="body2" className='hidden md:flex secondary' onClick={handleClose}>
                        <PersonOutlineIcon fontSize="small" className='text-secondary' />
                        <Typography className='font-bold tracking-wider text-secondary' variant="body2">
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
                                    {icon} &nbsp;
                                    {count}
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
