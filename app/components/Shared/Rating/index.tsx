import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

type RatingProps = {
    value: number
}

const StarRating = ( {value}: RatingProps ) => {
  return (
    <Box component="fieldset" borderColor="transparent">
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
};

export default StarRating;
