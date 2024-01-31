export interface CartItem {
    id: number;
    price: number;
    quantity: number;
    thumbnail: string;
    title: string,
    stock: number
  }
  
  export interface CartOpen {
    isOpen: boolean
  }

  export interface CartState {
    cartVisible: boolean;
    items: CartItem[];
  }