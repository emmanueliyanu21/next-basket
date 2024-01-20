import { AppDispatch } from '@/store/store';
import { setProducts, setSingleProduct } from '../../redux/slice/productSlice';

export const fetchProducts = async (dispatch: AppDispatch) => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    dispatch(setProducts(data.products));
  } catch (error) {
  }
};

export const fetchSingleProduct = async (dispatch: AppDispatch, productId: number) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      dispatch(setSingleProduct(data));
    } catch (error) {
    }
  };
