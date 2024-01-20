import React from 'react'
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import { Image1, Image2, Image3, Image4 } from './static-data'
import { Typography, TypographyProps } from '@mui/material';

import  {data}  from './static-data'

interface Item {
  itemCount?: number;
  category?: string; 
  readMore?: string;
  variant?: TypographyProps['variant'];
}

interface ItemContentProps extends Item {
  variant?: TypographyProps['variant'];
}

const ItemContent: React.FC<ItemContentProps> = ({ itemCount, category, readMore, variant = 'h5' }) => (
  <Box className="absolute top-0 p-5">
    <Typography color="primary" className='font-bolder' variant='body2'>{itemCount} Items</Typography>
    <Typography variant={variant} className={`py-${variant === 'h3' ? 2 : 1} font-montserrat font-bolder capitalize leading-8 text-black tracking-wide`}>{category}</Typography>
    <Typography variant='body2' className='text-black font-bolder font-medium'>{readMore}</Typography>
  </Box>
);

const HeroGrid = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  }));

  return (
    <Container className='my-24' maxWidth="lg">
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={5}>
      <Item className='relative'>
        <Box>
          <Image src={Image1} width={465} height={600} style={{ maxHeight: '605px' }} alt="Bandage" />
        </Box>
        <ItemContent itemCount={data.itemCount} category={data.category} readMore={data.readMore} variant={'h3'} />
      </Item>
    </Grid>
    <Grid item xs={12} sm={6} md={7} className='font-'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item className='relative '>
            <Image src={Image2} width={678} height={300} alt="Bandage" />
            <ItemContent itemCount={data.itemCount} category={data.category} readMore={data.readMore} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item className='relative '>
            <Image src={Image3} width={331} height={300} alt="Bandage" />
            <ItemContent itemCount={data.itemCount} category={data.category} readMore={data.readMore} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item className='relative '>
            <Image src={Image4} width={331} height={300} alt="Bandage" />
            <ItemContent itemCount={data.itemCount} category={data.category} readMore={data.readMore} />
          </Item>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Container>

  )
}

export default HeroGrid
