import React from 'react'
import ProductDescription from './product-description';
import ProductGallery from './product-gallery'
import { Paper, Grid, styled, Box } from '@mui/material';
import { SingleProduct } from '@/types/Product';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  }));

type ProductDetailProps =  {
    product: SingleProduct;
    loading: boolean;
}

const ProductDetail = ({product, loading}: ProductDetailProps) => {
    return (
      <>
          <Box className='mb-24 mt-5'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} className='text-left'>
                    <Item>
                        <ProductGallery images={product.images} title={product.title} loading={loading}/>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Item>
                        <ProductDescription data={product} loading={loading}/>
                    </Item>
                </Grid>
            </Grid>
        </Box>
      </>
    )
}

export default ProductDetail
