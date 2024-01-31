import { SingleProduct } from "@/types/Product";
import { ADD_TO_WISH, REMOVE_ITEM, OPEN_WISH_MODAL, CLOSE_WISH_MODAL, } from '../types/wishList.types'

export const addToWish = (product: SingleProduct) => {
  return {
    type: ADD_TO_WISH,
    payload: product,
  };
};

export const removeItem = (productId: number) => ({
  type: REMOVE_ITEM,
  payload: productId,
});

export const openWishModal = () => ({
  type: OPEN_WISH_MODAL,
});

export const closeWishModal = () => ({
  type: CLOSE_WISH_MODAL,
});
