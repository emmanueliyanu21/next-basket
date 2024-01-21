export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
    title?: string
  }
  
  export interface CartOpen {
    isOpen: boolean
  }

  export interface CartState {
    isCartModalOpen: boolean;
    items: CartItem[];
  }