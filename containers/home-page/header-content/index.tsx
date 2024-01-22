import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
// import { HeaderContentProps } from '@/types/Home';

// type typeProp = "product" | "home";

type HeaderContentProps = {
  data: {
    caption: string,
    header?: string,
    detail?: string
  },
  type?: string
}

const HeaderContent = ({ data, type }: HeaderContentProps) => {
  return (
    <>
      {type === 'product' ? (
        <Box className="font-montserrat py-8">
          <Typography className=" text-black font-montserrat text-2xl font-bold leading-12 tracking-wide pb-3">
            {data.caption}
          </Typography>
        </Box>
      ) : (
        <Box textAlign="center" className="font-montserrat py-8">
          <Typography className="text-center font-montserrat text-grey font-normal leading-7 pb-2 tracking-wider" variant="h6">
            {data.header}
          </Typography>
          <Typography className="text-center text-black font-montserrat text-2xl font-bold leading-12 tracking-wide pb-3">
            {data.caption}
          </Typography>
          <Typography className="text-center text-grey font-montserrat font-normal leading-5 tracking-wider" variant="body1">
            {data.detail}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default HeaderContent;
