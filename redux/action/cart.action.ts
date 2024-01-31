
import { HANDLE_CART_WISH_MODAL, UPDATE_CART, REMOVE_ITEM } from '../types/cart.types'
import { CartItem } from "@/types/Cart";

export const removeItem = (productId: number) => ({
  type: REMOVE_ITEM,
  payload: productId,
});

export const updateCart = (cart: CartItem[]) => ({
  type: UPDATE_CART,
  payload: cart
})

export const handleCartWishModal = (isVisible: {}) => ({
  type: HANDLE_CART_WISH_MODAL,
  payload: isVisible
});



