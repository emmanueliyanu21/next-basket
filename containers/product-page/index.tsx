"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { bestSellingData, description, featuredCompany, productCard } from '../static-data'
import BestSelling from '../home-page/best-selling'
import Box from '@mui/material/Box';
import FeaturedCompany from './featured-company'
import ProductDetail from './product-detail';
import TabsPanel from './tabs-panel';
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
    
    return (
        <>
            <Box className={`${isProductPage ? 'xl:px-48' : ''} m-4 xl:mt-20`}>
                <Breadcrumb breadcrumbs={breadcrumb} />
                <Box>
                    <ProductDetail />
                    <TabsPanel data={description} />
                </Box>
                <Box className="bg-lightWhite">
                    <BestSelling page={isProductPage} dataHeader={bestSellingData.dataHeader}  />
                    <Box className={`${isProductPage ? 'lg:px-48' : ''}`}>
                        <FeaturedCompany data={featuredCompany} />
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default ProductPage
