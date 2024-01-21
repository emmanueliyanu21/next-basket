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
import Breadcrumb from '@/components/Breadcrumb';

const breadcrumb = [
    {
        title: "home",
        path: "/"
    },
    {
        title: "shop"
    },
]

const ProductPage = () => {
    const pathname = usePathname()
    const isProductPage = pathname.split('/')[1];
    const { singleProduct } = useSelector((state: RootState) => state.product);
    return (
        <>
            <Box className={`${isProductPage ? 'xl:px-48' : ''} mt-20`}>
                <Breadcrumb breadcrumbs={breadcrumb} />

                <Box>
                    <ProductDetail data={singleProduct} />
                    <TabsPanel data={description} />
                </Box>
                <Box className="bg-lightWhite">
                    <BestSelling dataHeader={bestSellingData.dataHeader} />
                    <Box className={`${isProductPage ? 'lg:px-48' : ''}`}>
                        <FeaturedCompany data={featuredCompany} />
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default ProductPage
