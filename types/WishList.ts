export interface WishItem {
    id: number;
    price: number;
    quantity: number;
    thumbnail: string;
    title: string;
    stock?: number
  }
  
  export interface WishState {
    isWishModalOpen: boolean;
    items: WishItem[];
  }

  