import React from 'react'
import ProductDescription from './product-description';
import TabsPanel from '../tabs-panel';
import ProductGallery from './product-gallery'
import { Paper, Container, Grid, styled, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { description } from '@/containers/static-data';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  }));

const ProductDetail = () => {
    const { singleProduct, loading } = useSelector((state: RootState) => state.product);

    return (
      <>
          <Box className='mb-24 mt-5'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} className='text-left'>
                    <Item>
                        <ProductGallery images={singleProduct.images} title={singleProduct.title} loading={loading}/>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Item>
                        <ProductDescription data={singleProduct} loading={loading}/>
                    </Item>
                </Grid>
            </Grid>
        </Box>
        <TabsPanel content={singleProduct}/>
      </>
    )
}

export default ProductDetail
