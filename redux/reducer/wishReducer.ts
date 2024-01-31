import { WishState } from '@/types/WishList';
import { REMOVE_ITEM, UPDATE_WISHLIST, } from '../types/wishList.types'

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
    case UPDATE_WISHLIST:
      return {
        ...state,
        items: action.payload,
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default wishReducer;
