import React from 'react'
import ProductDescription from './product-description';
import ProductImage from './product-image';
import { SingleProduct } from '@/types/Product';
import { Paper, Container, Grid, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

// type ProductDetailProps = {
//     data: SingleProduct;
// }

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
        <Container className='mb-24 mt-5'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} className='text-left'>
                    <Item>
                        <ProductImage images={singleProduct.images} title={singleProduct.title} loading={loading}/>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Item>
                        <ProductDescription data={singleProduct} loading={loading}/>
                    </Item>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetail
