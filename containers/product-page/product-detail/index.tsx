import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ImageDetails from './product-description';
import ProductImage from './product-image';
import { SingleProduct } from '@/types/Product';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
        <Container className='my-28'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} className='text-left'>
                    <Item>
                        <ProductImage data={data} />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Item>
                        <ImageDetails data={data} />
                    </Item>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetail
