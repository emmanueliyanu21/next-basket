import { ADD_TO_CART, CLOSE_CART_MODAL, DECREMENT_QUANTITY, INCREMENT_QUANTITY, OPEN_CART_MODAL, REMOVE_ITEM } from '../types/cart.types'
import { CartState } from '@/types/Cart';
import { updatePrdtQuantityInCart, removePrdtFromCart, addPrdtToCart } from '../../libs/util';

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
      
       return {
          ...state,
          items: addPrdtToCart(action.payload, state.items),
        };

    case REMOVE_ITEM:
      return {
        ...state,
        items: removePrdtFromCart(action.payload, state.items),
      };

    case INCREMENT_QUANTITY:
      return {
        ...state,
        items: updatePrdtQuantityInCart(action.payload, state.items, 1),
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        items: updatePrdtQuantityInCart(action.payload, state.items, -1),
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
