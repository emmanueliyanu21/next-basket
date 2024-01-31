import {baseURL} from '@/libs/endpoints'
import { AppDispatch } from '@/store/store';
import { setProductCategories, setAllCategories, setLoader } from '../../redux/slice/productSlice';

export const fetchAllCategories = async (dispatch: AppDispatch) => {
    const apiURL = `${baseURL}/products/categories`
    try {
      dispatch(setLoader(true))
      const response = await fetch(apiURL);
      const data = await response.json();
      dispatch(setAllCategories(data));
      dispatch(setLoader(false))
    } catch (error) {
      dispatch(setLoader(false))
    }
  };

export const fetchProductCategories = async (dispatch: AppDispatch, categoryName: string) => {
    const apiURL = `${baseURL}/products/category/${categoryName}`
    try {
      dispatch(setLoader(true))
      const response = await fetch(apiURL);
      const data = await response.json();
      dispatch(setProductCategories(data));
      dispatch(setLoader(false))
    } catch (error) {
      dispatch(setLoader(false))
    }
  };