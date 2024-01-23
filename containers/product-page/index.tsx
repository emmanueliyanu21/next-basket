"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import { bestSellingData, featuredCompany } from '../static-data'
import BestSelling from '../home-page/best-selling'
import Box from '@mui/material/Box';
import FeaturedCompany from './featured-company'
import ProductDetail from './product-detail';
import Breadcrumb from '@/components/Breadcrumb';
import TabsPanel from './tabs-panel'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

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
    const { singleProduct, loading } = useSelector((state: RootState) => state.product);

    return (
        <>
            <Box className={`${isProductPage ? 'xl:px-48' : ''} pb-2 mb-4 xl:pt-8 bg-lightWhite`} maxWidth={"1500px"} margin={"auto"}>
                <Breadcrumb breadcrumbs={breadcrumb} />
                <Box>
                    <ProductDetail product={singleProduct} loading={loading} />
                </Box>
            </Box>
            <Box>
                <TabsPanel content={singleProduct}/>
            </Box>
            <Box className="bg-lightWhite">
                <Box className={`${isProductPage ? 'xl:px-48' : ''} mt-4 xl:mt-18`}>
                    <BestSelling page={isProductPage} dataHeader={bestSellingData.dataHeader} />
                    <FeaturedCompany data={featuredCompany} />
                </Box>
            </Box>
        </>
    )
}

export default ProductPage
