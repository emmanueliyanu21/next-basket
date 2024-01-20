import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ImageDetails from './image-details';
import ProductImage from './product-image';
import { ProductDetailsProps } from '@/types/Product';

const ProductDetail = ({ data }: ProductDetailsProps) => {
    return (
        <Container className='my-28'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className='text-left'>
                    <ProductImage data={data} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImageDetails data={data} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetail
