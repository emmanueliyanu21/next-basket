"use client"

import Image from 'next/image';
import React from 'react'
import { Box, Skeleton, Typography } from '@mui/material';
import { SingleProduct } from '@/types/Product';

const Description = ({ data }: { data: SingleProduct }) => {
  return (
    <Box
      className="flex flex-wrap  lg:flex-nowrap md:gap-10">
      <Box display="block" className="py-4 lg:max-w-[500px] lg:min-w-[500px]" >
        {
          data.title ?
            <Typography className="pb-2 text-black font-Montserrat text-2xl font-bold leading-32 tracking-wider">
              {data.title}
            </Typography>
            :
            <Skeleton className='text-2xl font-bold' variant="text" height={"50px"} />
        }
        <Typography
          className={`my-6 text-grey font-Montserrat text-sm font-normal leading-6 tracking-wider`}
        >
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </Typography>
        <Typography

          className={`my-6 text-grey font-Montserrat text-sm font-normal leading-6 tracking-wider sm:border-l-2 sm:border-primary sm:pl-4`}
        >
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </Typography>
        <Typography
          className={`my-6 text-grey font-Montserrat text-sm font-normal leading-6 tracking-wider`}
        >
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
        </Typography>
      </Box>
      {!data.thumbnail ?
        <Box >
          <Skeleton variant="rectangular" height="400px" width="400px" />
        </Box>
        :
        <Image className='sm:min-w-[250px] xl:min-w-[400px]' src={data.thumbnail} alt="image" sizes='100vw' width={0} height={0} style={{
          maxWidth: "800px",
          width: "100%",
          maxHeight: "500px",
          minHeight: "400px",
          height: "100%",
          objectFit: "cover",
          overflow: "hidden",
          objectPosition: "top"
        }} />}
    </Box>
  )
}

export default Description
