import React from 'react';
import Image from 'next/image';
import { Box, Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Image1, Image2, Image3, Image4 } from './static-data';
import { data } from './static-data';
import { ItemContentProps } from '@/types/Home';

const ItemContent: React.FC<ItemContentProps> = ({ itemCount, category, readMore, variant = 'h5' }) => (
  <Box className="absolute top-0 p-5">
    <Typography className="font-bolder text-lightGreen tracking-wider" variant="body2">
      {itemCount} Items
    </Typography>
    <Typography
      variant={variant}
      className={`py-${variant === 'h3' ? 4 : 2} font-montserrat font-bolder capitalize leading-8 text-black tracking-wide`}
    >
      {category}
    </Typography>
    <Typography variant="body2" className="text-black font-medium">
      {readMore}
    </Typography>
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
    <Container className="my-24" maxWidth="lg">
      <Box className="flex flex-col lg:flex-row">
        <Box className="lg:w-1/2 lg:mr-4">
          <div className="relative">
            <Box>
              <Image src={Image1}  width={0} height={0} alt="Bandage"
                  sizes="100vw"
                  style={{
                    minWidth: '331px',
                    width: '100%',
                    maxWidth: '1024px',
                    minHeight: '300px',
                    maxHeight: '600px',
                    height: '100%',
                    cursor: 'pointer',
                    objectFit: 'cover', objectPosition: "top" }} />
            </Box>
            <ItemContent itemCount={data.itemCount} category={data.category} readMore={data.readMore} variant="h3" />
          </div>
        </Box>
        <Box className="lg:w-1/2 flex flex-col md:mt-7 lg:mt-0 mt-7">
          <Item className="relative mb-4 ">
            <Image src={Image2} width={0} height={0} alt="Bandage"
                  sizes="100vw"
                  style={{
                    minWidth: '331px',
                    width: '100%',
                    maxWidth: '1024px',
                    minHeight: '300px',
                    maxHeight: '600px',
                    height: '100%',
                    cursor: 'pointer',
                    objectFit: 'cover', objectPosition: "top" }} />
            <ItemContent itemCount={data.itemCount} category={data.category} readMore={data.readMore} />
          </Item>
          <Box className="flex flex-col md:flex-row ">
            <Item className="relative md:mr-4  sm:mb-4 md:mb-0 lg:mb-0 lg:mr-4 md:w-1/2">
              <Image src={Image3} width={0} height={0} alt="Bandage"
                  sizes="100vw"
                  style={{
                    minWidth: '200px',
                    width: '100%',
                    maxWidth: '800px',
                    minHeight: '283px',
                    maxHeight: '600px',
                    height: '100%',
                    cursor: 'pointer',
                    objectFit: 'cover', objectPosition: "top" }} />
              <ItemContent itemCount={data.itemCount} category={data.category} readMore={data.readMore} />
            </Item>
            <Item className="relative md:w-1/2 mt-4 sm:mt-0">
              <Image src={Image4} width={0} height={0} alt="Bandage"
                  sizes="100vw"
                  style={{
                    minWidth: '200px',
                    width: '100%',
                    maxWidth: '800px',
                    minHeight: '283px',
                    maxHeight: '600px',
                    height: '100%',
                    cursor: 'pointer',
                    objectFit: 'cover', objectPosition: "top" }} />
              <ItemContent itemCount={data.itemCount} category={data.category} readMore={data.readMore} />
            </Item>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroGrid;
