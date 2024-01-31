"use client"

import Head from 'next/head';
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
    <Head>
        <title>Your Product Title - Ecommerce Site</title>
        <meta name="description" content="Description of your product." />
      </Head>
    <ProductPage />
    </>
  );
};

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const product = await fetchSingleProduct(id);
//   return {
//     props: {
//       product,
//     },
//   };
// }

export default ProductDetailPage;
