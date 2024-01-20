import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { socialMediaLinks, contactInfo } from './static-data';

function Header() {
  return (
    <Container maxWidth="xl" className="py-2 bg-primary text-white font-montserrat">
      <Box className="flex justify-between">
        <Box className="flex items-center">
          {contactInfo.map((info, index) => (
            <Box key={index} className={`flex items-center p-2 ${index === 1 ? 'hidden md:flex' : ''}`}>
              {info.icon}
              <Typography variant="body2" className="ml-1">
                {info.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box className="hidden md:flex items-center p-2">
          <Typography variant="body2" className="ml-1">
            Follow Us and get a chance to win 80% off
          </Typography>
        </Box>
        <Box display="flex"  className="items-center p-2">
          <Typography  variant="body2" className="hidden md:flex mx-2">
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
