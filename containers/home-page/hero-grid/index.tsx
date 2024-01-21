import React from 'react'
import Image from 'next/image';
import {Grid, Box, Container, Paper, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Image1, Image2, Image3, Image4 } from './static-data'
import { data } from './static-data'
import { ItemContentProps } from '@/types/Home';

const ItemContent: React.FC<ItemContentProps> = ({ itemCount, category, readMore, variant = 'h5' }) => (
  <Box className="absolute top-0 p-5">
    <Typography className='font-bolder text-lightGreen tracking-wider' variant='body2'>{itemCount} Items</Typography>
    <Typography variant={variant} className={`py-${variant === 'h3' ? 4 : 2} font-montserrat font-bolder capitalize leading-8 text-black tracking-wide`}>{category}</Typography>
    <Typography variant='body2' className='text-black font-medium '>{readMore}</Typography>
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
              <Image src={Image1} width={500} height={600} style={{ maxHeight: '616px' }} alt="Bandage" />
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
            <Grid container spacing={0} className='mt-4 ml-4 '>
              <Grid item xs={12} sm={6} className='mr-[-10px]' >
                <Item className='relative '>
                  <Image src={Image3} width={331} height={300} alt="Bandage" />
                  <ItemContent itemCount={data.itemCount} category={data.category} readMore={data.readMore} />
                </Item>
              </Grid>
              <Grid item xs={12} sm={6} className=''>
                <Item className='relative '>
                  <Image src={Image4} width={331} height={300} alt="Bandage" />
                  <ItemContent itemCount={data.itemCount} category={data.category} readMore={data.readMore} />
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>

  )
}

export default HeroGrid
