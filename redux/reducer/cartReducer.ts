import { ADD_TO_CART, CLOSE_CART_MODAL, DECREMENT_QUANTITY, INCREMENT_QUANTITY, OPEN_CART_MODAL, REMOVE_ITEM } from '../types/cart.types'
import { CartState } from '@/types/Cart';

type CartActionTypes = {
  type: string,
  payload: any
}

const initialState: CartState = {
  isCartModalOpen: false,
  items: [],
};

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProduct = state.items.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case INCREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        ),
      };

    case OPEN_CART_MODAL:
      return {
        ...state,
        isCartModalOpen: true,
      };

    case CLOSE_CART_MODAL:
      return {
        ...state,
        isCartModalOpen: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
