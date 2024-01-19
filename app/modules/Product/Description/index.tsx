import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Typography } from '@mui/material';

export type DescriptionProps = {
    data: {
        header: string[],
        content: {
            header: string,
            text: string[],
            image: string
        }
    }
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Description = ({ data }: DescriptionProps) => {
    return (
        <Box>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6} className='text-left flex items-center justify-start'>
      <Box display="block" className="py-4">
        <Typography className="pb-2 text-black font-Montserrat text-2xl font-bold leading-32 tracking-wider">
          {data.content.header}
        </Typography>
        {data.content.text.map((item, index) => (
          <Typography
            maxWidth={500}
            key={index}
            className={`my-6 text-grey font-Montserrat text-sm font-normal leading-6 tracking-wider ${
              index === 1 ? 'sm:border-l-2 sm:border-primary sm:pl-4' : ''
            }`}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Grid>
    <Grid item xs={12} sm={6} className='flex justify-center'>
      <Image src={data.content.image} alt="image" width={500} height={500} />
    </Grid>
  </Grid>
</Box>

    )
}

export default Description
