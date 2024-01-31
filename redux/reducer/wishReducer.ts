import { WishState } from '@/types/WishList';
import { ADD_TO_WISH, REMOVE_ITEM, OPEN_WISH_MODAL, CLOSE_WISH_MODAL, } from '../types/wishList.types'
import { addPrdtToWishList, removePrdtFromWish } from '@/libs/util';

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
      return {
        ...state,
        items: addPrdtToWishList(action.payload, state.items),
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: removePrdtFromWish(action.payload, state.items),
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
