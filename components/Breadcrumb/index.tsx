import React from 'react';
import { Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import { BreadCrumbProps } from '@/types/BreadCrumbProps';
import { ChevronRight } from '@mui/icons-material';

const Breadcrumb = ({ breadcrumbs }: BreadCrumbProps) => {
  return (
    <Breadcrumbs className='ml-4' aria-label="breadcrumb" separator={<ChevronRight style={{color: "#BDBDBD", fontSize: "35px"}}/>}>
      {breadcrumbs.map(({ path, title }, index) => (
       <div key={index} className="capitalize font-Montserrat font-semibold">
         {path ? <Link href={path}><Typography className="text-black" key={index} color="textPrimary">
          {title}
        </Typography></Link> : <Typography className='text-lightGrey' key={index} color="textPrimary">
          {title}
        </Typography>
}
       </div>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
