"use client"

import React from 'react'
import { RootState } from '../../store/store';
import { bestSellingData, description, featuredCompany, productCard } from '../static-data'
import BestSelling from '../home-page/best-selling'
import Box from '@mui/material/Box';
import FeaturedCompany from './featured-company'
import ProductDetail from './product-detail';
import TabsPanel from './description/tabs-panel';
import { useSelector } from 'react-redux';

const ProductPage = () => {

    const data = useSelector((state: RootState) => state.product);

    return (
        <>
            <ProductDetail data={data.singleProduct} />
            <TabsPanel data={description} />
            <Box className="bg-lightWhite">
                <BestSelling dataHeader={bestSellingData.dataHeader} data={data.products} />
                <FeaturedCompany data={featuredCompany} />
            </Box>
        </>
    )
}

export default ProductPage
