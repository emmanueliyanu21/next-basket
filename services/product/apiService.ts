import { AppDispatch } from '@/store/store';
import { setProducts, setSingleProduct, setLoader } from '../../redux/slice/productSlice';
import { PaginationProps } from '@/types/Product';

export const fetchProducts = async (dispatch: AppDispatch, page: PaginationProps) => {
  let { limit = 30, skip = 0 } = page
  try {
    dispatch(setLoader(true))
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await response.json();
    dispatch(setProducts(data));
    dispatch(setLoader(false))
  } catch (error) {
    dispatch(setLoader(false))
  }
};

export const fetchSingleProduct = async (dispatch: AppDispatch, productId: number) => {
  try {
    dispatch(setLoader(true))
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    dispatch(setSingleProduct(data));
    dispatch(setLoader(false))
  } catch (error) {
    dispatch(setLoader(false))

  }
};
