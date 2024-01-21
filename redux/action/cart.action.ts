
import { Product, SingleProduct } from "@/types/Product";
import { ADD_TO_CART, CLOSE_CART_MODAL, DECREMENT_QUANTITY, INCREMENT_QUANTITY, OPEN_CART_MODAL, REMOVE_ITEM } from '../types/cart.types'
import { CartItem } from './../../types/Cart'

export const addToCart = (product: SingleProduct) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeItem = (productId: number) => ({
  type: REMOVE_ITEM,
  payload: productId,
});

export const incrementQuantity = (productId: number) => ({
  type: INCREMENT_QUANTITY,
  payload: productId,
});

export const decrementQuantity = (productId: number) => ({
  type: DECREMENT_QUANTITY,
  payload: productId,
});

export const openCartModal = () => ({
  type: OPEN_CART_MODAL,
});

export const closeCartModal = () => ({
  type: CLOSE_CART_MODAL,
});

export const getCartFromLocalStorage = (): CartItem[] => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

export const saveCartToLocalStorage = (product: SingleProduct[]): void => localStorage.setItem('cart', JSON.stringify(product));

