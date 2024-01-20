import React from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import StarRating from '@/components/Shared/Rating';

type Testimonialprops = {
    data: {
        gallery: { image: string }[],
        testimonial: {
            header: string,
            rating: number,
            text: string,
            name: string,
            title: string,
            image: string
        }
    }
}

const Testimonials = ({ data }: Testimonialprops) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
    }));

    return (
        <Container className='my-52'>
  <Box display="flex">
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={6}>
        <Item className='relative text-center'>
          <Typography className="pb-16 font-Montserrat text-2xl font-bold text-black leading-32 tracking-wide">{data.testimonial.header}</Typography>
          <Box className="pb-6" display="flex" justifyContent="center">
            <Image src={data.testimonial.image} alt="Bandage" width={90} height={90} />
          </Box>
          <StarRating value={data.testimonial.rating} />
          <Typography className="font-Montserrat pb-4 text-14 font-bold leading-24 tracking-wider text-grey">{data.testimonial.text}</Typography>
          <Typography className='text-secondary font-medium'>{data.testimonial.name}</Typography>
          <Typography className='text-black text-sm pt-1 font-bold'>{data.testimonial.title}</Typography>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box flexWrap="wrap" display='flex' justifyContent="center" gap={3}>
          {data.gallery.map((item, index) => (
            <Image key={index} src={item.image} alt="Bandage" width={150} height={150} />
          ))}
        </Box>
      </Grid>
    </Grid>
  </Box>
</Container>

    )
}

export default Testimonials
