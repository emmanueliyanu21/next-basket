import React from 'react'
import { Typography } from '@mui/material';
import { FeaturedContentProps } from '../index';
import Box from '@mui/material/Box';

const TopContent = ({data}: FeaturedContentProps) => {
  return (
    <Box textAlign="center" className="my-12">
      <Typography className="pb-4 text-center font-Montserrat  font-bold leading-24 tracking-wide text-secondary">{data.caption}</Typography>
      <Typography className="text-center text-4xl font-Montserrat text-black font-bold leading-50 tracking-wider">{data.title}</Typography>
    </Box>
  )
}

export default TopContent
