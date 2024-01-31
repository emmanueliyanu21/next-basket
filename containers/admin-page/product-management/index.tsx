import React, { useEffect, useState } from "react";
import ProductForm from "./product-form";
import ProductTable from "./product-table";
import { Box } from '@mui/material'
import { SingleProduct } from "@/types/Product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  getAllProducts,
  deleteProduct,
} from "@/services/product/apiService";

const productData: SingleProduct = {
  id: 0,
  title: "",
  description: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: "",
  category: "",
  thumbnail: "",
  images: [],
};

const ProductManagementPage = () => {
  const dispatch = useDispatch();
  const [product, setProductData] = useState(productData);

  const products = useSelector(
    (state: RootState) => state.product.addedProducts
  );

  useEffect(() => {
    getAllProducts(dispatch);
  }, [dispatch]);


  const handleDeleteProduct = (productId: number) => {
    deleteProduct(dispatch, productId);
  };

  const handleEditProduct = (editedData: SingleProduct) => {
    setProductData(editedData)
  };

  return (
    <Box className="container mx-auto my-8">
      <ProductForm product={product}  />
      <ProductTable
        products={products}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
    </Box>
  );
};

export default ProductManagementPage;
