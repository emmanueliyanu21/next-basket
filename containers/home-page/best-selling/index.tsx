import React from 'react'
import HeaderContent from '../header-content'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Shared/Button'
import { ProductCardProps, HeaderProps } from '../../../types/Home'

const buttonData = {
    value: 'LOAD MORE PRODUCTS',
    variant: 'outlined'
}

const BestSelling: React.FC<ProductCardProps & HeaderProps> = ({ dataHeader, data }) => {
    return (
        <Container>
            <HeaderContent data={dataHeader} />
            <Box className="mt-10">
                <ProductCard data={data} />
            </Box>
            <Box className="py-8">
                <Button data={buttonData} />
            </Box>
        </Container>
    )
}

export default BestSelling
