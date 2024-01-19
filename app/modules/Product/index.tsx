import Footer from '@/app/components/Footer'
import React, { useEffect, useState } from 'react'
import { bestSellingData, description, featuredCompany, footer, productCard } from '../static-data'
import BestSelling from '../HomePageContent/BestSelling'
import Box from '@mui/material/Box';
import FeaturedCompany from './FeaturedCompany'
import ProductDetail from './ProductDetail';
import TabsPanel from './Description/TabsPanel';

const Product = () => {

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
            <Footer data={footer} />
        </>
    )
}

export default Product
