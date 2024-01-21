import { WishState } from '@/types/WishList';
import { ADD_TO_WISH, REMOVE_ITEM, OPEN_WISH_MODAL, CLOSE_WISH_MODAL, } from '../types/wishList.types'

type WishActionTypes = {
  type: string,
  payload: any
}

const initialState: WishState = {
  isWishModalOpen: false,
  items: [],
};

const wishReducer = (state = initialState, action: WishActionTypes): WishState => {
  switch (action.type) {
    case ADD_TO_WISH:
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

    case OPEN_WISH_MODAL:
      return {
        ...state,
        isWishModalOpen: true,
      };

    case CLOSE_WISH_MODAL:
      return {
        ...state,
        isWishModalOpen: false,
      };

    default:
      return state;
  }
};

export default wishReducer;
