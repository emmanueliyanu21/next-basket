export interface WishItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    title: string
  }
  
  export interface WishState {
    isWishModalOpen: boolean;
    items: WishItem[];
  }