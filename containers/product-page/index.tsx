"use client"

import React from 'react'
import { RootState } from '../../store/store';
import { usePathname } from 'next/navigation'
import { bestSellingData, description, featuredCompany, productCard } from '../static-data'
import BestSelling from '../home-page/best-selling'
import Box from '@mui/material/Box';
import FeaturedCompany from './featured-company'
import ProductDetail from './product-detail';
import TabsPanel from './tabs-panel';
import { useSelector } from 'react-redux';


const ProductPage = () => {
    const pathname = usePathname()
    const isProductPage = pathname.split('/')[1];

    const data = useSelector((state: RootState) => state.product);
    return (
        <>
            <Box className={`${isProductPage ? 'md:px-48' : ''}`}>
                <ProductDetail data={data.singleProduct} />
                <TabsPanel data={description} />
            </Box>
            <Box className="bg-lightWhite">
                {/* <BestSelling dataHeader={bestSellingData.dataHeader} /> */}
                <Box className={`${isProductPage ? 'md:px-48' : ''}`}>
                <FeaturedCompany data={featuredCompany} />
                </Box>
            </Box>
        </>
    )
}

export default ProductPage
