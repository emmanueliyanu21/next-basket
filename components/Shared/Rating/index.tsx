import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { RatingProps } from '@/types/Rating';

const StarRating = ( {value}: RatingProps ) => {
  return (
    <Box component="fieldset" borderColor="transparent">
      <Rating name="read-only" value={value} readOnly sx={{
         '& .MuiRating-iconFilled': {
          color: '#F3CD03',
        },
      }} />
    </Box>
  );
};

export default StarRating;
