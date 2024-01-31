"use client"

import React from 'react'
import { Container } from '@mui/material'
import ProductList from '../ProductList'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const CategoriesProducts = () => {
    const { products } = useSelector((state: RootState) => state.product.productCategory)
    // console.log(productCategory, 'lol');
    
  return (
    <Container className='xl:px-28 xl:pt-16'>
      <ProductList data={products}  />
    </Container>
  )
}

export default CategoriesProducts
