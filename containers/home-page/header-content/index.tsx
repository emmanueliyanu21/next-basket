import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { HeaderContentProps } from '@/types/Home';

const HeaderContent = ({data}: HeaderContentProps) => {
  return (
    <Box textAlign="center" className="font-montserrat py-8">
      <Typography className="text-center font-montserrat  text-grey font-normal leading-7 pb-2 tracking-wider" variant='h6' >{data.header}</Typography>
      <Typography className="text-center text-black font-montserrat text-2xl font-bold leading-12 tracking-wide pb-3">{data.caption}</Typography>
      <Typography className="text-center text-grey font-montserrat font-normal leading-5 tracking-wider" variant='body1'>{data.detail}</Typography>
    </Box>
  )
}

export default HeaderContent
