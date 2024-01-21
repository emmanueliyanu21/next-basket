import { SingleProduct } from "@/types/Product";

export const addToCart = (product: SingleProduct) => {
  return {
    type: 'ADD_TO_CART',
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

export const openCartModal = () => ({
  type: 'OPEN_CART_MODAL',
});

export const closeCartModal = () => ({
  type: 'CLOSE_CART_MODAL',
});
