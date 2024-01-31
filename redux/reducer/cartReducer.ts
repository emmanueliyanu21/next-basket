import {  HANDLE_CART_WISH_MODAL, UPDATE_CART } from '../types/cart.types'
import { CartState } from '@/types/Cart';

type CartActionTypes = {
  type: string,
  payload: any
}

const initialState: CartState = {
  isVisible: {
    status: false,
    key: ''
  },
  items: [],
};

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {

    case UPDATE_CART:
      return {
        ...state,
        items: action.payload
      }

    case HANDLE_CART_WISH_MODAL:
      return {
        ...state,
        isVisible: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
