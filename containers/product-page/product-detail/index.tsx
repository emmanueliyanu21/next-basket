import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ImageDetails from './image-details';
import ProductImage from './product-image';

const ImageData = {
    name: 'Floating Phone',
    rating: 4,
    price: 11393
}

export type ProductDetailsProps = {
    data: {
        mainImage: string,
        otherImage: string[]
    }
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ProductDetail = ({ data }: ProductDetailsProps) => {
    return (
        <Container className='my-28'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} className='text-left'>
                    <Item>
                        <ProductImage data={data.mainImage} />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImageDetails data={ImageData} />
                </Grid>
            </Grid>
        </Container>

    )
}

export default ProductDetail
