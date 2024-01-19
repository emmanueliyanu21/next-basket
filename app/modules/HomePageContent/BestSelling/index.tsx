import React from 'react'
import HeaderContent from '../HeaderContent'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProductCard from '@/app/components/ProductCard';
import Button from '../../../components/Shared/Button'

export type HeaderProps = {
    dataHeader: {
        header: string,
        caption: string,
        detail: string
    }
}

export type ProductCardProps = {
    data: {
        id: number,
        imageUrl: string;
        title: string;
        category: string;
        discountPercentage: number,
        price: number,
        images: string[]
    }[],
}

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
