// import { BestSellingProduct, ProductState } from "@/types/Product";
// import { PayloadAction } from "@reduxjs/toolkit";

// const singleProduct = {
//     id: 0,
//     title: "",
//     description: "",
//     price: 0,
//     discountPercentage: 0,
//     rating: 0,
//     stock: 0,
//     brand: "",
//     category: "",
//     thumbnail: "",
//     images: [],
//   };
  
//   const initialState: ProductState = {
//     bestSelling: {
//       products: [],
//       limit: 0,
//       total: 100,
//       skip: 0,
//     },
//     singleProduct: singleProduct,
//     loading: false,
//     categories: [],
//     productCategory: {
//         products: [],
//       limit: 0,
//       total: 100,
//       skip: 0,
//     },
//     searchProducts:{
//         products: [],
//       limit: 0,
//       total: 100,
//       skip: 0,
//     },
//   };
  
  
  
// const productReducer = (
//     state = initialState,
//     action: PayloadAction<BestSellingProduct>
//   ) => {
//     switch (action.type) {
//       case "SET_PRODUCTS":
//         const { products, ...pagination } = action.payload;
//         const prevState = state.bestSelling.products;
//         const result = [...prevState, ...products];
//         return {
//           ...state,
//           bestSelling: { products: result, ...pagination },
//         };
  
//       case "SET_LOADER":
//         return {
//           ...state,
//           loading: action.payload,
//         };
  
//       case "SET_SINGLE_PRODUCT":
//         return {
//           ...state,
//           singleProduct: action.payload,
//         };
  
//       case "SET_ALL_CATEGORIES":
//         return {
//           ...state,
//           categories: action.payload,
//         };
  
//         case "SET_PRODUCT_CATEGORIES":
//           return {
//             ...state,
//             productCategory: action.payload
//           }
//     }
//   };

//   export default productReducer