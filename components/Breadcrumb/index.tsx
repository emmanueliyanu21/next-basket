import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
// import { BreadCrumbProps } from '@/types/BreadCrumbProps';

const items = ['Home', 'Shoes']
// { items }:BreadCrumbProps
const Breadcrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="/">
      <Link href="/">
        <HomeIcon />
      </Link>
      {items.map((item, index) => (
        <Typography key={index} color="textPrimary">
          {item}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
