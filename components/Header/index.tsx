"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { socialMediaLinks, contactInfo } from './static-data';

function Header() {
  const pathname = usePathname()
  const isProductPage = pathname.split('/')[1];
  return (
    <Container maxWidth="xl" className={`${isProductPage ? 'xl:px-48' : ''} py-2 bg-primary text-white font-Montserrat`}>
      <Box className="flex justify-between flex-wrap  lg:flex-nowrap">
        <Box className="flex items-center xl:gap-4 flex-wrap  lg:flex-nowrap">
          {contactInfo.map((info, index) => (
            <Box key={index} className={`flex items-center p-2`}>
              {info.icon}
              <Typography variant="body2" className="ml-1 font-semibold tracking-wider">
                {info.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className="md:hidden xl:flex items-center p-2">
          <Typography variant="body2" className="ml-1 font-semibold tracking-wider">
            Follow Us and get a chance to win 80% off
          </Typography>
        </Box>
        <Box display="flex" className="items-center p-2">
          <Typography variant="body2" className="hidden md:flex mx-2 font-semibold tracking-wider">
            Follow Us&nbsp;&nbsp;:
          </Typography>
          <Box className="flex gap-2 justify-center items-center">
            {socialMediaLinks.map((link, index) => (
              <React.Fragment key={index}>{link.icon}</React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>

  )
}

export default Header
