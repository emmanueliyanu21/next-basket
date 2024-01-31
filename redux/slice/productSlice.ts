import {
  BestSellingProduct,
  ProductState,
  SingleProduct,
} from "@/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const singleProduct = {
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

const initialState: ProductState = {
  bestSelling: {
    products: [],
    limit: 0,
    total: 100,
    skip: 0,
  },
  singleProduct: singleProduct,
  loading: false,
  categories: [],
  productCategory: {
    products: [],
    limit: 0,
    total: 100,
    skip: 0,
  },
  searchProducts: {
    products: [],
    limit: 0,
    total: 100,
    skip: 0,
  },
  newProducts: [],
  addedProducts: []
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<BestSellingProduct>) => {
      const { products, ...pagination } = action.payload;
      const prevState = state.bestSelling.products;
      const result = [...prevState, ...products];
      state.bestSelling = { products: result, ...pagination };
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSingleProduct: (state, action: PayloadAction<SingleProduct>) => {
      state.singleProduct = action.payload;
    },
    setAllCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProductCategories: (state, action) => {
      state.productCategory = action.payload;
    },
    setSearchedProducts: (state, action) => {
      state.searchProducts = action.payload
    },
    setAddProduct: (state, action: PayloadAction<SingleProduct[]>) => {
      state.newProducts = action.payload
    },
    getAddProducts: (state, action) => {
      state.addedProducts = action.payload
    }
  },
});

export const {
  setProducts,
  setSingleProduct,
  setLoader,
  setAllCategories,
  setProductCategories,
  setSearchedProducts,
  setAddProduct,
  getAddProducts
} = productSlice.actions;
export default productSlice.reducer;
