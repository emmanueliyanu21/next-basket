import { SingleProduct } from "@/types/Product";
import { UPDATE_WISHLIST, REMOVE_ITEM } from '../types/wishList.types'
import { WishItem } from "@/types/WishList";

export const updateWishList = (cart: WishItem[]) => {
  return {
    type: UPDATE_WISHLIST,
    payload: cart,
  };
};

export const removeItem = (productId: number) => ({
  type: REMOVE_ITEM,
  payload: productId,
});

