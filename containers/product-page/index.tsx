"use client"

import React, { useEffect, useState } from 'react'
import { bestSellingData, description, featuredCompany, footer, productCard } from '../static-data'
import BestSelling from '../home-page/best-selling'
import Box from '@mui/material/Box';
import FeaturedCompany from './featured-company'
import ProductDetail from './product-detail';
import TabsPanel from './description/tabs-panel';

const ProductPage = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data.products.slice(0, 10))
            } catch (error) {
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ProductDetail data={productCard} />
            <TabsPanel data={description} />
            <Box className="bg-lightWhite">
                <BestSelling dataHeader={bestSellingData.dataHeader} data={product} />
                <FeaturedCompany data={featuredCompany} />
            </Box>
        </>
    )
}

export default ProductPage
