import { SingleProduct } from "@/types/Product";

export const addToWish = (product: SingleProduct) => {
  return {
    type: 'ADD_TO_WISH',
    payload: product,
  };
};

export const removeItem = (productId: number) => ({
  type: 'REMOVE_ITEM',
  payload: productId,
});

export const incrementQuantity = (productId: number) => ({
  type: 'INCREMENT_QUANTITY',
  payload: productId,
});

export const decrementQuantity = (productId: number) => ({
  type: 'DECREMENT_QUANTITY',
  payload: productId,
});

export const openWishModal = () => ({
  type: 'OPEN_WISH_MODAL',
});

export const closeWishModal = () => ({
  type: 'CLOSE_WISH_MODAL',
});
