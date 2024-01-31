import { baseURL } from "@/libs/endpoints";
import { AppDispatch } from "@/store/store";
import { Product } from "@/types/Product";

export const addProduct = async (dispatch: AppDispatch, product: Product) => {
  const dataToSubmit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  };
  const apiURL = `${baseURL}/products/add`;
  try {
    //   dispatch(setLoader(true))
    const response = await fetch(apiURL, dataToSubmit);
    const data = await response.json();
    //   dispatch(setAllCategories(data));
    //   dispatch(setLoader(false))
  } catch (error) {
    //   dispatch(setLoader(false))
  }
};

export const updateProduct = async (
  dispatch: AppDispatch,
  productID: number
) => {
  const apiURL = `${baseURL}/products/${productID}`;
  try {
    //   dispatch(setLoader(true))
    const response = await fetch(apiURL);
    const data = await response.json();
    //   dispatch(setAllCategories(data));
    //   dispatch(setLoader(false))
  } catch (error) {
    //   dispatch(setLoader(false))
  }
};

export const deleteProduct = async (
  dispatch: AppDispatch,
  productID: number
) => {
  const apiURL = `${baseURL}/products/${productID}`;
  try {
    //   dispatch(setLoader(true))
    const response = await fetch(apiURL);
    const data = await response.json();
    //   dispatch(setAllCategories(data));
    //   dispatch(setLoader(false))
  } catch (error) {
    //   dispatch(setLoader(false))
  }
};
