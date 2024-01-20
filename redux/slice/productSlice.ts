import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  discountPercentage: number;
  price: number;
  images: string[];
}

interface SingleProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductState {
  products: Product[];
  singleProduct: SingleProduct;
}

const initialState: ProductState = {
  products: [],
  singleProduct: {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setSingleProduct: (state, action: PayloadAction<SingleProduct>) => {
      state.singleProduct = action.payload;
    },
  },
});

export const { setProducts, setSingleProduct } = productSlice.actions;
export default productSlice.reducer;
