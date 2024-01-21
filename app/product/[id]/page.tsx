"use client"

import { fetchSingleProduct } from '@/services/product/apiService';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation'
import ProductPage from '@/containers/product-page';

const ProductDetailPage = () => {
  const pathname = usePathname()
  const parts = pathname.split("/");
  const productId = parseInt(parts[2], 10);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      const id = Array.isArray(productId) ? productId[0] : productId;
      fetchSingleProduct(dispatch, Number(id));
    }
  }, [dispatch, productId]);

  return (
    <>
    <ProductPage />
    </>
  );
};

export default ProductDetailPage;
