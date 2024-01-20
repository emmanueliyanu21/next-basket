import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { RatingProps } from '@/types/Rating';

const StarRating = ( {value}: RatingProps ) => {
  return (
    <Box component="fieldset" borderColor="transparent">
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
};

export default StarRating;
