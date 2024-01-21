import React from 'react'
import ProductDescription from './product-description';
import ProductImage from './product-image';
import { SingleProduct } from '@/types/Product';
import { Paper, Container, Grid, styled } from '@mui/material';

type ProductDetailProps = {
    data: SingleProduct;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  }));

const ProductDetail: React.FC<ProductDetailProps> = ({ data }) => {
    return (
        <Container className='mb-24 mt-5'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} className='text-left'>
                    <Item>
                        <ProductImage data={data} />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Item>
                        <ProductDescription data={data} />
                    </Item>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetail
