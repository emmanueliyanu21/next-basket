"use client"

import Image from 'next/image';
import React from 'react'
import {Box, Grid, Typography} from '@mui/material';
import { DescriptionProps } from '@/types/Product';

const Description = ({ data }: DescriptionProps) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} className='text-left flex items-center justify-start'>
          <Box display="block" className="py-4">
            <Typography className="pb-2 text-black font-Montserrat text-2xl font-bold leading-32 tracking-wider">
              {data.content.header}
            </Typography>
            {data.content.text.map((item, index) => (
              <Typography
                key={index}
                className={`my-6 text-grey font-Montserrat text-sm font-normal leading-6 tracking-wider ${index === 1 ? 'sm:border-l-2 sm:border-primary sm:pl-4' : ''}`}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className='flex justify-center'>
          <Image src={data.content.image} alt="image" width={500} height={500} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Description
