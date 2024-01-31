import { baseURL } from "@/libs/endpoints";
import { AppDispatch } from "@/store/store";
import {
  setProducts,
  setSingleProduct,
  setLoader,
  setSearchedProducts,
  setAddProduct,
  getAddProducts,
} from "../../redux/slice/productSlice";
import { PaginationProps, SingleProduct } from "@/types/Product";

export const fetchProducts = async (
  dispatch: AppDispatch,
  page: PaginationProps
) => {
  let { limit = 10, skip = 0 } = page;
  try {
    dispatch(setLoader(true));
    const response = await fetch(
      `${baseURL}/products?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    dispatch(setProducts(data));
    dispatch(setLoader(false));
  } catch (error) {
    dispatch(setLoader(false));
  }
};

export const fetchSingleProduct = async (
  dispatch: AppDispatch,
  productId: number
) => {
  try {
    dispatch(setLoader(true));
    const response = await fetch(`${baseURL}/products/${productId}`);
    const data = await response.json();
    dispatch(setSingleProduct(data));
    dispatch(setLoader(false));
  } catch (error) {
    dispatch(setLoader(false));
  }
};

export const searchProduct = async (dispatch: AppDispatch, name: string) => {
  const apiURL = `${baseURL}/products/search?q=${name}`;
  try {
    dispatch(setLoader(true));
    const response = await fetch(apiURL);
    const data = await response.json();
    dispatch(setSearchedProducts(data));
    dispatch(setLoader(false));
  } catch (error) {
    dispatch(setLoader(false));
  }
};

export const createProduct = async (
  dispatch: AppDispatch,
  query: SingleProduct
) => {
  dispatch(setLoader(true));
  const localStorageData = localStorage.getItem("products");
  const existingData = localStorageData ? JSON.parse(localStorageData) : [];

  const timestamp = new Date().getTime();
  const randomId = Math.floor(Math.random() * 1000)
  const id = `${timestamp}-${randomId}`;

  const newData = {
    ...query,
    id,
  };

  const updatedData = [...existingData, newData];
  localStorage.setItem("products", JSON.stringify(updatedData));
  dispatch(getAddProducts(updatedData));
  dispatch(setLoader(false));
};

export const getAllProducts = async (dispatch: AppDispatch) => {
  dispatch(
    getAddProducts(JSON.parse(localStorage.getItem("products") || "[]"))
  );
};

export const deleteProduct = (dispatch: AppDispatch, itemId: number) => {
  const items = JSON.parse(localStorage.getItem("products") || "[]");
  const updatedItems = items.filter(
    (item: { id: number }) => item.id !== itemId
  );
  localStorage.setItem("products", JSON.stringify(updatedItems));
  dispatch(getAddProducts(updatedItems));
};

export const editProduct = async (dispatch: AppDispatch, editedData: SingleProduct) => {
  dispatch(setLoader(true));
  const localStorageData = localStorage.getItem('products');
  const existingData = localStorageData ? JSON.parse(localStorageData) : [];
  const index = existingData.findIndex((item: { id: number }) => item.id === editedData.id);
  if (index !== -1) {
    existingData[index] = editedData;
    localStorage.setItem('products', JSON.stringify(existingData));
    dispatch(getAddProducts(existingData));
  } 
  dispatch(setLoader(false));
};
