import React, { useEffect, useRef, useState } from 'react'
import { Button, Box, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import HeaderContent from '../header-content'
import ProductCard from '@/components/ProductCard';
import { bestSellingData } from '@/containers/static-data';
// import Button from '@/components/Shared/Button'
import { ProductCardProps, HeaderProps } from '../../../types/Home'
import { RootState } from '@/store/store';
import { fetchProducts } from '@/services/product/apiService';
import { PaginationProps } from '@/types/Product';

const buttonData = {
    value: 'LOAD MORE PRODUCTS',
    variant: 'outlined'
}

const BestSelling: React.FC<HeaderProps> = () => {
    const initialized = useRef(false)
    const [showLoadMore, setLoadMoreToggle] = useState(true)
    const dispatch = useDispatch();
    const { products, loading, ...pagination } = useSelector((state: RootState) => {
        const { bestSelling, loading } = state.product
        return { ...bestSelling, loading }
    });

    const fetch = (pageParams: PaginationProps = {}) => {
        fetchProducts(dispatch, pageParams)
    }

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
        }
        fetch()
    }, []);

    const loadMore = () => {
        const { limit, skip, total } = pagination
        if (limit + skip < total) {
            let newSkip = limit + skip
            fetch({ skip: newSkip, limit })
            if (newSkip + limit >= total) {
                setLoadMoreToggle(false);
            }
        }
    }

    return (
        <Container>
            <HeaderContent data={bestSellingData.dataHeader} />
            <Box className="max-h-[600px] overflow-hidden h-full overflow-y-auto mt-10">
                <ProductCard data={products} />
            </Box>
            {loading ? "loading" : showLoadMore ? <Box className="py-8 flex  flex-col items-center p-15 pb-40 gap-10">
            <Button
                className={`border border-solid border-secondary shadow-none text-secondary py-8 px-40 font-bolder text-sm font-montserrat bg-transparent hover:bg-secondary hover:text-white`}
                onClick={loadMore}>Load More</Button>
            </Box> : ""}
        </Container>
    )
}

export default BestSelling