import React from 'react'
import Box from '@mui/material/Box';
import { ProductListProps } from '../../types/Product'
import ProductCard from './ProductCard';

const ProductList = ({ data, limit }: ProductListProps) => {
    const products = limit ? data.slice(0, limit) : data
    return (
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={2}>
            {products && products.map((item, index) => (
                <Box key={index} >
                    <ProductCard item={item} />
                </Box>
            ))}
        </Box>
    )
}

export default ProductList
