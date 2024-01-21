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
  bestSelling: BestSellingProduct;
  singleProduct: SingleProduct;
  loading: boolean
}

interface BestSellingProduct {
  products: Product[];
  limit: number;
  total: number;
  skip: number;
}

const singleProduct =  {
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
}
const initialState: ProductState = {
bestSelling: {
  products: [],
  limit: 0,
  total: 100,
  skip: 0
},
singleProduct:  singleProduct,
loading: false
}


// const initialState: ProductState = {
//   products: [],
//   singleProduct: {
//     id: 0,
//     title: '',
//     description: '',
//     price: 0,
//     discountPercentage: 0,
//     rating: 0,
//     stock: 0,
//     brand: '',
//     category: '',
//     thumbnail: '',
//     images: [],
//   },
// };

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<BestSellingProduct>) => {
      const {products, ...pagination} = action.payload
      const prevState = state.bestSelling.products
      const result = [...prevState, ...products]
      state.bestSelling = {products: result, ...pagination};
    },
    setLoader:(state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSingleProduct: (state, action: PayloadAction<SingleProduct>) => {
      state.singleProduct = action.payload;
    },
  },
});

export const { setProducts, setSingleProduct, setLoader } = productSlice.actions;
export default productSlice.reducer;
