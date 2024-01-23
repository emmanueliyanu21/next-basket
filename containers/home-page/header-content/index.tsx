import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

type HeaderContentProps = {
  content: {
    caption: string,
    title?: string,
    detail?: string;
  };
  type?: "default" | "captionOnly";
}

const HeaderContent = ({ content, type }: HeaderContentProps) => {
  const {caption, title, detail} = content;
  return (
    <>
      {type === "captionOnly" ? (
        <Box className="py-8">
          <Typography className="font-Montserrat text-black text-2xl font-bold leading-12 tracking-wide pb-3">
            {caption}
          </Typography>
        </Box>
      ) : (
        <Box textAlign="center" className="py-8 font-Montserrat">
          <Typography className="text-center text-grey font-normal leading-7 pb-2 tracking-wider" variant="h6">
            {title}
          </Typography>
          <Typography className="text-center text-black text-2xl font-bold leading-12 tracking-wide pb-3">
            {caption}
          </Typography>
          <Typography className="text-center text-grey font-normal leading-5 tracking-wider" variant="body1">
            {detail}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default HeaderContent;
